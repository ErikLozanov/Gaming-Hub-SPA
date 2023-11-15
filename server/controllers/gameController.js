const router = require("express").Router();

const gameManager = require("../managers/gameManager");

router.get('/', async (req, res) => {

    const games = await gameManager.getAll(req.query);

    res.json(games);
})

router.post("/", async (req, res) => {
    try {
        await gameManager.create(req.body);

        res.status(204).end();
    } catch (err) {
        res.status(400).json({
            message: 'Cannot create game'
        });
    }
});

router.get('/my-added-games/:userId', async (req, res) => {

    const userId = req.params.userId;

    console.log(userId);
    const games = await gameManager.getByOwner(userId).lean();

    res.json(games);
});

router.get('/:gameId',async (req, res) => {
    const game = await gameManager.getOne(req.params.gameId);

    res.json(game);
});

router.put('/:gameId', async (req, res) => {
    try {
        await gameManager.update(req.params.gameId, req.body);

        res.status(204).end();
    } catch (err) {
        res.status(400).json({
            message: 'Cannot edit game'
        });

    }

});

router.delete('/:gameId', async (req, res) => {

    try {
        await gameManager.delete(req.params.gameId);

        res.status(204).end();
    } catch (err) {
        res.status(400).json({
            message: 'Cannot delete game'
        });

    }

});

router.post('/games', async (req, res) => {
    const {name, genre} = req.params;

    const games = await gameManager.searchGame(name, genre).lean();
    console.log(games);

    res.json(games);
});

module.exports = router;
