const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const locationTypeSchema = new Schema({
    name:{type:String, required:true, trim:true},
});

module.exports = mongoose.model('locationType', locationTypeSchema);