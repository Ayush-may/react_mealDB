const {
 handleUserCreate,
 handleUserLogin,
 handleUserAuthCheck,
} = require("../controller/user");
const router = require("express").Router();

router.post("/loginuser", handleUserLogin);
router.post("/createuser", handleUserCreate);

module.exports = router;
