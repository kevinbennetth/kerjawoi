const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskAttachmentSchema = new Schema({
    taskId:{type:Schema.Types.ObjectId, ref:"task", required:true},
    attachmentTypeId:{type:Schema.Types.ObjectId, ref:"attachmentType", required:true},
    title:{type:String, required:true, trim:true},
    link:{type:String, required:true, trim:true},
});

module.exports = mongoose.model('taskAttachment', taskAttachmentSchema);