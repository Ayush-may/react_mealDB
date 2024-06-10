const {
    handleUserCreate,
    handleUserLogin,
    addToCart,
    handleFectchCart,
    handleUpdateQuantity
} = require("../controller/user");
const router = require("express").Router();

// ---> /api/users/--> use below routes

router
    .post("/loginuser", handleUserLogin)
    .post("/createuser", handleUserCreate)
    .post("/addToCart", addToCart)
    .post("/fetchCart", handleFectchCart)
    .post("/updateQuantity", handleUpdateQuantity)

module.exports = router;
