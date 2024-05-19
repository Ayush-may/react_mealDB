const jwt = require("jsonwebtoken");

function auth(req, res, next) {
 try {
  const { uid } = req.cookies;
  const { username } = req.body.data;
  // invalid token or no token is available
  if (!uid) {
   return res.status(401).end("token invalid");
  }
  // token is available
  else if (uid) {
   const verifyToken = jwt.verify(uid, process.env.JSONKEY);
   if (!verifyToken) return res.status(401).end("Token is not verified !");
   req.user = verifyToken;
  }
  next();
  return;
 } catch (error) {
  return res.status(401).end("SERVER ERROR");
 }
}

module.exports = { auth };
