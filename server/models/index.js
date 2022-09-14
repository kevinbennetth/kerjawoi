const Team = require("./team");
const User = require("./user");

const LocationType = require("./meetings/locationType");
const Meeting = require("./meetings/meeting");

const MeetingMember = require("./members/meetingMember");
const TaskMember = require("./members/taskMember");
const TeamMember = require("./members/teamMember");
const UserPosition = require("./members/userPosition");

const Project = require("./projects/projects");
const Section = require("./projects/section");
const Task = require("./projects/task");
const AttachmentType = require("./projects/attachmentType");
const TaskAttachment = require("./projects/taskAttachment");
const Category = require("./projects/category");
const TaskCategory = require("./projects/taskCategory");

module.exports = { 
    Team, User, 
    LocationType, Meeting, 
    MeetingMember, TaskMember, TeamMember, UserPosition, 
    Project, Section, Task, 
    AttachmentType, TaskAttachment, Category, TaskCategory
}