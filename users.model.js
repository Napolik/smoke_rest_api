const mongoose = require('mongoose');
const NoteSchema = new mongoose.Schema({
    _id: String,
    id: Number,
    is_bot: Boolean,
    first_name: String,
    last_name: String,
    username: String,
    language_code: String
});
module.exports = mongoose.model('Users', NoteSchema);