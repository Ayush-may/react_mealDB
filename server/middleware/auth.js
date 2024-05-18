const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

function auth(req, res, next) {
    try {
        const { uid } = req.cookies;
        if (!uid) return res.status(401).end("token invalid");

        const { username } = req.body.data;
        const verifyToken = jwt.verify(uid, process.env.JSONKEY);

        if (!verifyToken) return res.status(400).end("Token not found !");
        req.user = verifyToken;

        next();
    } catch (error) {
        return res.status(500).end("SERVER ERROR");
    }
}

module.exports = { auth };
