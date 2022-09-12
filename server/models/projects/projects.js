const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    teamId:{type:Schema.Types.ObjectId, ref:"team", required:true},
    title:{type:String, required:true, trim:true},
    description:{type:String, trim:true}
});

module.exports = mongoose.model('project', projectSchema);