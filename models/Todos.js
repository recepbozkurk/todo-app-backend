const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodosSchema = new Schema({
    text: String,
    isComplete: Boolean
});

module.exports = mongoose.model('todos', TodosSchema);