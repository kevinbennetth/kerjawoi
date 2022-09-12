const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const attachmentTypeSchema = new Schema({
    name:{type:String, required:true, trim:true},
});

module.exports = mongoose.model('attachmentType', attachmentTypeSchema);