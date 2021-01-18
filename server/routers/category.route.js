const express = require("express");
const router = express.Router();

const {
  createCategoryController,
  getAllCategoriesController,
} = require("../controllers/category.controller");

router.post("/", createCategoryController);
router.get("/all", getAllCategoriesController);
