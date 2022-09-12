const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name:{type:String, required:true, trim:true},
    email:{type:String, required:true, trim:true},
    password:{type:String, required:true, trim:true},
    dob:{type:Date},
    image:{type:String, trim:true}
});

module.exports = mongoose.model('user', userSchema);