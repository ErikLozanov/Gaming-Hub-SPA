const router = require('express').Router();

const userManager = require('../managers/userManager');

router.post('/register',async (req, res) => {
        const {email} = req.body;
        req.user = email;

    try {
        const result = await userManager.register(email);

        res.json(result);
        
    } catch (err) {
        res.status(400).json({
            message: 'Email already exists!',
        })
    }
});

router.post('/login', async (req, res) => {
    const {email} = req.body;
    req.user = email;
    try {
        const result = await userManager.login(email);

        res.json(result);
    } catch (err) {
            res.status(400).json({
                message: err.message
            })
    }

});

router.get('/logout', (req, res) => {
    // TODO: invalidate token
    res.end();
})

module.exports = router;