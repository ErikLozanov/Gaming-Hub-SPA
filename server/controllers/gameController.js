const router = require("express").Router();

const gameManager = require("../managers/gameManager");

router.get('/', async (req, res) => {

    const games = await gameManager.getAll(req.query);

    res.json(games);
});


router.post("/create-game", async (req, res) => {
    try {
        const result = await gameManager.create(req.body);
        res.json(result);
        res.status(204).end();
    } catch (err) {
        res.status(400).json({
            message: 'Cannot create game'
        });
    }
});

router.get('/my-added-games/:userId', async (req, res) => {

    const userId = req.params.userId;

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

// router.get('/', async (req, res) => {
//     const title = req.body;
//     console.log(title);

//     try {
//         const games = await gameManager.searchGame(title).lean();
//         console.log(games);
    
//         res.json(games);
//     } catch (error) {
//         res.status(400).json({
//             message: 'Cannot delete game'
//         });
//     }


// });

module.exports = router;
