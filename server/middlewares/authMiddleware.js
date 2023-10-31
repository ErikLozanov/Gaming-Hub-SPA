const jwt = require('jsonwebtoken');

const {SECRET, TOKEN_KEY} = require('../config/config');

exports.auth = (req, res, next) => {
    // const token = req.header('X-Authorization');
    const token = req.cookies[TOKEN_KEY];
    
    if(token) {
        try {
            const decodedToken = jwt.verify(token, SECRET);
            console.log(decodedToken);
            req.user = decodedToken;
            console.log(req.user);
            next();
        } catch (err) {
            res.clearCookie(TOKEN_KEY);

            res.status(401).json({
                message: 'You are not authorized!'
            })
        }
    } else {
        next();
    }
};
