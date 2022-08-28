const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const meetingSchema = new Schema({
    teamId:{type:Schema.Types.ObjectId, ref:"team", required:true},
    description:{type:String, required:true, trim:true},
    startDate:{type:Date, required:true},
    endDate:{type:Date, required:true},
    location:{type:String, required:true},
    locationTypeId:{type:Schema.Types.ObjectId, ref:"locationType", required:true}
});

module.exports = mongoose.model('meeting', meetingSchema);