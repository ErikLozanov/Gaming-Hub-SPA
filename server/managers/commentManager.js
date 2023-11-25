const Comment = require('../models/Comment');

exports.getAllForGame = async (gameId) => {

    const result = await Comment.find({ gameId: gameId }).populate('_ownerId');
    return result;
}

exports.create = async (data) => {
    return Comment.create(data);
}

exports.update = (commentId, commentData) => Comment.findByIdAndUpdate(commentId, { $set: { text: commentData } },
    { new: true });


exports.delete = (commentId) => {
    return Comment.findByIdAndDelete(commentId);
};