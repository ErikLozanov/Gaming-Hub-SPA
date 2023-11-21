const router = require("express").Router();

const commentManager = require("../managers/commentManager");

router.get('/:gameId',async (req, res) => {
    const game = await commentManager.getAllForGame(req.params.gameId);

    res.json(game);
});

module.exports = router;

