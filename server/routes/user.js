const { handleUserCreate, handleUserLogin } = require("../controller/user");
const router = require("express").Router();

router.post("/loginuser", handleUserLogin);
router.post("/createuser", handleUserCreate);

module.exports = router;
