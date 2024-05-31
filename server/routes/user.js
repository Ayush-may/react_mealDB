const {
    handleUserCreate,
    handleUserLogin,
    handleUserAuthCheck,
    addToCart,
    handleFectchCart
} = require("../controller/user");
const router = require("express").Router();


// ---> /api/users
router
    .post("/loginuser", handleUserLogin)
    .post("/createuser", handleUserCreate)
    .post("/addToCart", addToCart)
    .post("/fetchCart", handleFectchCart)

module.exports = router;
