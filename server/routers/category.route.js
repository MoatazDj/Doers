const express = require("express");
const router = express.Router();
const categoryById = require("../middleware/categoryById");

const {
  createCategoryController,
  getAllCategoriesController,
  getCategoryByIdController,
} = require("../controllers/category.controller");

router.post("/", createCategoryController);
router.get("/all", getAllCategoriesController);
router.get("/:categoryId", categoryById, getCategoryByIdController);

module.exports = router;
