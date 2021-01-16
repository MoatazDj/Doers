const express = require("express");
const router = express.Router();
// const {
//   validRegister,
//   ValidLogin,
//   forgotPasswordValidator,
//   resetPasswordValidator,
// } = require("../helpers/valid");
const {
  registerController,
  activationController,
  loginController,
  forgotController,
  resetController,
  googleController,
} = require("../controllers/auth.controller.js");

router.post("/register", registerController);
router.post("/login", loginController);
router.post("/activation", activationController);
router.put("/password/forgot", forgotController);
router.put("/password/reset", resetController);
router.post("/googlelogin", googleController);
module.exports = router;
