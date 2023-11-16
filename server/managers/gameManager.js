const Game = require('../models/Game');

exports.getAll = async () => {
    const result = await Game.find();
    return result;
}

exports.getOne = (gameId) => Game.findById(gameId);

exports.create = (gameData) => {

    return Game.create(gameData);
}

exports.update = (gameId, gameData) => Game.findByIdAndUpdate(gameId, gameData);

exports.delete = (gameId) => Game.findByIdAndDelete(gameId);

exports.getByOwner = (userId) => Game.find({_ownerId: userId});

exports.searchGame = async (query) => {
  const result = await Game.find(query).exec();

  return result;
  };
