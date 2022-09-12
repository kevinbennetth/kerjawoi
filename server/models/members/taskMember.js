const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const memberSchema = new Schema({
    taskId:{type:Schema.Types.ObjectId, ref:"task", required:true},
    meetingId:{type:Schema.Types.ObjectId, ref:"meeting", required:true},
});

module.exports = mongoose.model('taskMember', memberSchema);