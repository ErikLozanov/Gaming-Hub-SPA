const mongoose = require('mongoose');


const commentSchema = new mongoose.Schema({
    gameId: {
        type: mongoose.Types.ObjectId,
        ref: 'Game'
    },
    text: {
        type: String,
        required: true,
    },
    _ownerId: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    },

});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;