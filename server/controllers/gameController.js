const router = require("express").Router();

const gameManager = require("../managers/gameManager");

router.get('/', async (req, res) => {
   const games = await gameManager.getAll();
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
       const deletedGame = await gameManager.delete(req.params.gameId);
        res.json(deletedGame);
        res.status(204).end();
    } catch (err) {
        res.status(400).json({
            message: 'Cannot delete game'
        });

    }

});

router.get('/search', async (req, res) => {

    try {
        const searchTerm = req.query.q; // Assuming the search term is passed as a query parameter named 'q'
        
        // Use $regex to perform a case-insensitive search
        const query = { searchField: { $regex: new RegExp(searchTerm, 'i') } };
    
        const result = await gameManager.searchGame(query);
    
        res.json(result);
      } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
      }

});

module.exports = router;
