const Game = require('../models/Game');

exports.getAll = async (qs) => {
    let query = await Game.find();
    console.log(qs.where);


    const result = await Game.find();

    return result;
}

exports.getOne = (gameId) => Game.findById(gameId);

exports.create = (gameData) => {
    console.log(gameData);

    return Game.create(gameData);
}

exports.update = (gameId, gameData) => Game.findByIdAndUpdate(gameId, gameData);

exports.delete = (gameId) => Game.findByIdAndDelete(gameId);

exports.getByOwner = (userId) => Game.find({_ownerId: userId});
