const router = require('express').Router();

const userController = require('./controllers/userController');
const gameController = require('./controllers/gameController');
const commentController = require('./controllers/commentController');

router.use('/users', userController);
router.use('/data/games', gameController);
router.use('/data/comments', commentController);

module.exports = router;