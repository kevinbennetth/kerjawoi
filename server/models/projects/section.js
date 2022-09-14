const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sectionSchema = new Schema({
    projectId:{type:Schema.Types.ObjectId, ref:"project", required:true},
    title:{type:String, required:true, trim:true},
});

module.exports = mongoose.model('section', sectionSchema);