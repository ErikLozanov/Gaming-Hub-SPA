const Game = require('../models/Game');

exports.getAll = async (data) => {
    const query = {};
    const {title, genre} = data;
    if(data) {
        if (title) {
            query.title = title;
          }
        
          if (genre) {
            query.genre = genre;
          }
          const result = await Game.find(query);
          return result;
    }

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

// exports.searchGame = (name, platform) => {

//   };
