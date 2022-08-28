const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userPositionSchema = new Schema({
    position:{type:String, required:true, trim:true}
});

module.exports = mongoose.model('userPosition', userPositionSchema);