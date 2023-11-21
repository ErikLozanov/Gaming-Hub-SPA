const router = require("express").Router();

const commentManager = require("../managers/commentManager");

router.get('/:gameId',async (req, res) => {
    console.log(req.params.gameId);
    const comments = await commentManager.getAllForGame(req.params.gameId);

    res.json(comments);
});

router.post('/:gameId',async (req, res) => {

    const newComment = await commentManager.create(req.body);

    res.json(newComment)
});

module.exports = router;

