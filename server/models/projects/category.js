const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
    projectId:{type:Schema.Types.ObjectId, ref:"project", required:true},
    name:{type:String, required:true, trim:true},
    color:{type:String, required:true, trim:true},
});

module.exports = mongoose.model('category', categorySchema);