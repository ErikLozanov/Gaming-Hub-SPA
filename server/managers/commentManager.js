const Comment = require('../models/Comment');

exports.getAllForGame = async (gameId) => {

    const result = await Comment.find({ gameId: gameId }).populate('_ownerId');
    return result;
}

exports.create = async (data) => {
    return Comment.create(data);
}