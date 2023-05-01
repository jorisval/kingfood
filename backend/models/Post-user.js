const mongoose = require('mongoose');

const postUserSchema = mongoose.Schema({
    Username: {type: String, required: true},
    email: {type: String, required: true}
});

module.exports = mongoose.model('PostUser', postUserSchema);