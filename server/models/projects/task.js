const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    sectionId:{type:Schema.Types.ObjectId, ref:"section", required:true},
    title:{type:String, required:true, trim:true},
    description:{type:String, trim:true},
    endDate:{type:Date, required:true},
    members:[{type:Schema.Types.ObjectId, ref:"teamMember"}],
    categories:[{type:Schema.Types.ObjectId, ref:"category"}]
});

module.exports = mongoose.model('task', taskSchema);