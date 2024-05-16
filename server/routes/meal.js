const router = require("express").Router();
const {
    handleGetCategory,
    handleGetAutoSuggestion,
    handleGetMealPagination,
} = require("../controller/meal");

router.get("/category", handleGetCategory);
router.get("/autosuggestion", handleGetAutoSuggestion);
router.get("/mealpagination", handleGetMealPagination);

module.exports = router;
