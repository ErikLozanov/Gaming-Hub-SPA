const Comment = require('../models/Comment');

exports.getAllForGame = async (gameId) => {

    const result = await Comment.find({ gameId: gameId });
    return result;
}

exports.create = async (data) => {
    return Comment.create(data);
}