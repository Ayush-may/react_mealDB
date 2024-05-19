const {
 handleUserCreate,
 handleUserLogin,
 handleUserAuthCheck,
} = require("../controller/user");
const router = require("express").Router();

router.get("/checkauth", handleUserAuthCheck);
router.post("/loginuser", handleUserLogin);
router.post("/createuser", handleUserCreate);

module.exports = router;
