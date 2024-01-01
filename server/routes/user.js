const router = require("express").Router();
const { User } = require("../models");

router.get("/", async(req, res)=>{
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        res.status(401).json({message:err.message})
    }
});

module.exports = router;
