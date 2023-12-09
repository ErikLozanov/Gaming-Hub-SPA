const Game = require('../models/Game');

exports.getAll = async () => {
    const result = await Game.find();
    return result;
}

exports.getOne = async (gameId) => {
  try {
    const game = await Game.findById(gameId).populate('_ownerId').exec();
    if (!game) {
      // Handle the case where the game with the specified ID is not found
      return null;
    }
    console.log('hi!');
    // Access populated fields here
    return game;
  } catch (error) {
    // Handle errors here
    console.error(error);
    throw error; // Rethrow the error for further handling, or handle it accordingly
  }
};

exports.create = (gameData) => {

    return Game.create(gameData);
};

exports.update = (gameId, gameData) => Game.findByIdAndUpdate(gameId, gameData);

exports.delete = (gameId) => Game.findByIdAndDelete(gameId);

exports.getByOwner = (userId) => Game.find({_ownerId: userId});

exports.getTrending = () => {
    return Game.find()
    .exec()
    .then(games => {
      const sortedGames = games.sort((a, b) => b.boughtBy.length - a.boughtBy.length);
  
      const top4Games = sortedGames.slice(0, 4);
  
      return top4Games;
    })
    .catch(err => {
      console.error('Error:', err);
    });
};

exports.searchGame = async (query) => {
  const result = await Game.find(query).exec();

  return result;
  };
