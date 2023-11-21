const Comment = require('../models/Comment');

exports.getAllForGame = async (gameId) => {

    const result = await Comment.findById(gameId);
    return result;
}