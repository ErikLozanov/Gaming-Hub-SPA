const Game = require('../models/Game');

exports.getAll = async () => {
    const result = await Game.find();
    return result;
}

exports.getOne = (gameId) => Game.findById(gameId);

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
      // Sort the games in descending order based on the length of 'boughtBy' array
      const sortedGames = games.sort((a, b) => b.boughtBy.length - a.boughtBy.length);
  
      // Get the top 4 games
      const top4Games = sortedGames.slice(0, 4);
  
      // Do something with the results
      return top4Games;
    })
    .catch(err => {
      // Handle errors
      console.error('Error:', err);
    });
};

exports.searchGame = async (query) => {
  const result = await Game.find(query).exec();

  return result;
  };
