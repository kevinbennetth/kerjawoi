const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teamSchema = new Schema({
    name:{type:String, required:true, trim:true},
    notification:{type:String, required:true, trim:true},
    permission:{type:Boolean, required:true}
});

module.exports = mongoose.model('team', teamSchema);