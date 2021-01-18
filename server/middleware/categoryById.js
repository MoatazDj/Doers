const mongoose = require("mongoose");
const Category = require("../models/category.model");

module.exports = async function (req, res, next) {
  const { _id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(403).json({
      error: "Category not valid",
    });
  }

  try {
    let category = await Category.findById({ _id });

    if (!category) {
      return res.status(403).json({
        error: "Category not found",
      });
    }

    req.category = category;
    next();
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
};
