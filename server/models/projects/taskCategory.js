const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskCategorySchema = new Schema({
    taskId:{type:Schema.Types.ObjectId, ref:"task", required:true},
    categoryId:{type:Schema.Types.ObjectId, ref:"category", required:true},
});

module.exports = mongoose.model('taskCategory', taskCategorySchema);