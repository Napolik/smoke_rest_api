const mongoose = require('mongoose');
const NoteSchema = new mongoose.Schema({
    _id: String,
    id: Number,
    type: String,
    time: String,
    date: String
});
module.exports = mongoose.model('Times', NoteSchema);