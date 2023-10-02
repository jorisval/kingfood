const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    author: {type: String, required: true},
    title: {type: String, required: true},
    imageUrl: {type: String, required: true},
    content: {type: String, required: true},
    dateCreated: {type: Date, default: Date.now},
    dateModified: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Post', postSchema);