const router = require("express").Router();

const commentManager = require("../managers/commentManager");

router.get('/:gameId',async (req, res) => {
    const comments = await commentManager.getAllForGame(req.params.gameId);

    res.json(comments);
});

router.post('/:gameId',async (req, res) => {

    const newComment = await commentManager.create(req.body);

    res.json(newComment)
});

router.put('/:gameId/:commentId',async (req, res) => {
    const commentId = req.params.commentId
    const gameId = req.params.gameId

    const editComment = await commentManager.update(commentId, req.body.text);

    res.json(editComment)
});

router.delete('/:gameId/:commentId',async (req, res) => {
    const commentId = req.params.commentId;
    const deletedComment = await commentManager.delete(commentId);

    res.json(deletedComment)
});

module.exports = router;

