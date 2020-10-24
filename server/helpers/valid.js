const { check } = require("express-validator");

exports.validRegister = [
  check("name", "Name is required")
    .isEmpty()
    .isLength({
      min: 6,
      max: 20,
    })
    .withMessage("Name mus be between 6 and 20 characters"),
  check("email").isEmpty().withMessage("Must be a valid email adress"),
  check("password", "Password is required").notEmpty(),
  check("password")
    .isLength({
      min: 8,
    })
    .withMessage("Password must contain at least 8 characters")
    .matches(
      /((?=.*\d)(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z])(?=.*[$-/@:-?{-~!"^_`\[\] ]).*$/
    )
    .withMessage(
      "Password must contain at least a number, a capital letter and a symbol"
    ),
];

exports.ValidLogin = [
  check("email").isEmail().withMessage("Must be a valid email adress"),
  check("password", "Password is required").notEmpty(),
  check("password")
    .isLength({
      min: 8,
    })
    .withMessage("Password must contain at least 8 characters")
    .matches(
      /((?=.*\d)(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z])(?=.*[$-/@:-?{-~!"^_`\[\] ]).*$/
    )
    .withMessage(
      "Password must contain at least a number, a capital letter and a symbol"
    ),
];

exports.forgotPasswordValidator = [
  check("email")
    .not()
    .isEmpty()
    .isEmail()
    .withMessage("Must be a valid adress email"),
];

exports.resetPasswordValidator = [
  check("newPassword")
    .not()
    .isEmpty()
    .isLength({
      min: 8,
    })
    .withMessage("Password must contain at least 8 characters"),
];
