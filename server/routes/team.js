const router = require("express").Router();
const { Team, TeamMember } = require("../models");

router.get("/", async (req, res) => {
  try {
    // Search query, sort filters, and last updated has not been included
    const teams = await Team.aggregate([
      {
        $lookup: {
          from: "teammembers",
          let: { id: "$_id" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: ["$teamId", "$$id"],
                },
              },
            },
            { $project: { teamId: 0, __v: 0 } },
          ],
          as: "members",
        },
      },
      {
        $lookup: {
          from: "users",
          let: { members: "$members" },
          pipeline: [
            { $match: { $expr: { $in: ["$_id", "$$members.userId"] } } },
            { $project: { __v: 0 } },
          ],
          as: "memberUsers",
        },
      },
      {
        $project: {
          _id: 1,
          name: 1,
          notification: 1,
          permission: 1,
          size: {
            $size: "$members",
          },
          members: {
            $map: {
              input: "$members",
              as: "m",
              in: {
                $first: {
                  $filter: {
                    input: "$memberUsers",
                    cond: { $eq: ["$$this._id", "$$m.userId"] },
                  },
                },
              },
            },
          },
          leader: {
            $map: {
              input: "$members",
              as: "m",
              in: {
                $first: {
                  $filter: {
                    input: "$memberUsers",
                    cond: {
                      $and: [
                        { $eq: ["$$this._id", "$$m.userId"] },
                        { $eq: ["$$m.userPosition", "Leader"] },
                      ],
                    },
                  },
                },
              },
            },
          },
        },
      },
    ]);
    res.status(200).json(teams);
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const newTeam = new Team({
      name: req.body.name,
      permission: false,
      notification: "1 week",
    });
    newTeam.save();
    const teamMember = new TeamMember({
      userId: "632c71b2e673cef486c0b1e8",
      teamId: newTeam._id,
      permission: true,
      userPosition: "Leader",
    });
    teamMember.save();
    res.status(200).json(newTeam);
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
});

module.exports = router;
