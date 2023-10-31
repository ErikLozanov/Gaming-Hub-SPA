const mongoose = require('mongoose');


const gameSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
    _ownerId: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    }
});

const Game = mongoose.model('Game', gameSchema);

module.exports = Game;