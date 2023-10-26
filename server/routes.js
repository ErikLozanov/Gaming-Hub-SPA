const router = require('express').Router();

const userController = require('./controllers/userController');
const gameController = require('./controllers/gameController');

router.use('/users', userController);
router.use('/data/games', gameController);

module.exports = router;