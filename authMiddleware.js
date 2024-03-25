const jwt = require('jsonwebtoken');

exports.authenticateToken = (req, res, next) => {
    const jwt = require('jsonwebtoken');
    const config = require('../config/config');


    exports.authenticateToken = (req, res, next) => {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];

        if (!token) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        jwt.verify(token, config.jwtSecret, (err, user) => {
            if (err) {
                return res.status(403).json({ message: 'Invalid token' });
            }
            req.user = user;
            next();
        });
    };
};