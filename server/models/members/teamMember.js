const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const memberSchema = new Schema({
    userPositionId:{type:Schema.Types.ObjectId, ref:"userPosition", required:true},
    userId:{type:Schema.Types.ObjectId, ref:"user", required:true},
    teamId:{type:Schema.Types.ObjectId, ref:"team", required:true},
    permission:{type:Boolean, required:true}
});

module.exports = mongoose.model('teamMember', memberSchema);