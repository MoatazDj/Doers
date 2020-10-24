const express = require("express");
const router = express.Router();
const {
  validRegister,
  ValidLogin,
  forgotPasswordValidator,
  resetPasswordValidator,
} = require("../helpers/valid");
const {
  registerController,
  activationController,
} = require("../controllers/auth.controller.js");

router.post("/register", validRegister, registerController);
router.post("/activation", activationController);

module.exports = router;
