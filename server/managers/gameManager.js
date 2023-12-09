const Game = require('../models/Game');

exports.getAll = async () => {
    const result = await Game.find();
    return result;
}

exports.getOne = async (gameId) => {
  try {
    const game = await Game.findById(gameId).populate('_ownerId').exec();
    if (!game) {
      return null;
    }
    return game;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

exports.create = async (gameData) => {
  const isValidTitle = await Game.findOne({title: gameData.title});
  if(!isValidTitle) {
    console.log('hi!');
    const game = await Game.create(gameData);
    return game;

} else {
   throw new Error('A game with this name is already added!');
}
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
