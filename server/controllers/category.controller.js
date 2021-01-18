const Category = require("../models/category.model");
const { validationResult } = require("express-validator");

exports.createCategoryController = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const firstError = errors.array.map((error) => error.msg)[0];
    return res.status(422).json({
      error: firstError,
    });
  }
  const { name } = req.body;
  try {
    let category = await Category.findOne({ name: name });
    if (category) {
      return res.status(403).json({
        error: "Category already exists",
      });
    }
    const newCategory = new Category({ name: name });
    category = await newCategory.save();
    res.json(category);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
};

exports.getAllCategoriesController = async (req, res) => {
  try {
    let data = await Category.find({});
    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server error");
  }
};

exports.getCategoryByIdController = async (req, res) => {
    res.json(req.category)
};
