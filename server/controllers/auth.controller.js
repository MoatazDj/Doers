const User = require("./../models/auth.models");
const jwt = require("jsonwebtoken");
const expressJwt = require("express-jwt");
const { OAuth2Client, JWT } = require("google-auth-library");
const fetch = require("node-fetch");
const { validationResult } = require("express-validator");
//custom error handler to get useful error from database errors
const { errorHandler } = require("../helpers/dbErrorHandling");
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.MAIL_KEY);
const {
  makeSalt,
  encryptPassword,
  authenthicate,
} = require("../models/utils.js");

exports.registerController = async (req, res) => {
  console.log(req.body);
  const { name, email, password } = req.body;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const firstError = errors.array.map((error) => error.msg)[0];
    return res.status(422).json({
      error: firstError,
    });
  }
  try {
    const user = await User.findOne({
      email,
    });
    if (user)
      return res.status(400).json({
        error: "Email is taken",
      });
    const token = await jwt.sign(
      {
        name,
        email,
        password,
      },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: "30h",
      }
    );
    const emailData = {
      from: process.env.EMAIL_FROM,
      to: email,
      subject: "Account activation link",
      html: `
            <h1>Please Click to link to activate</h1>
            <p>${process.env.CLIENT_URL}/users/activate/${token}</p>
            <hr/>
            <p>This email contain sensetive info</p>
            <p>${process.env.CLIENT_URL}</p>
            `,
    };
    await sgMail.send(emailData);
    return res.json({
      message: `Email has been sent to ${email}`,
    });
  } catch (error) {
    console.error(error);
    return res.status(400).json({
      error: errorHandler(error),
    });
  }
};

exports.activationController = async (req, res) => {
  try {
    const { token } = req.body;
    if (!token) throw new Error("No token");
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, async (err, decode) => {
      if (err)
        return res.status(401).json({
          error: "Expired Token. Signup again",
        });
      const { name, email, password } = decode;
      const salt = await makeSalt();
      const hashed_password = await encryptPassword(password, salt);
      User.create({
        email,
        name,
        hashed_password,
        salt,
      });
      return res.json({
        success: true,
        message: "SignUp success",
      });
    });
  } catch (error) {
    console.log(error);
    return res.json({
      message: "Error happening. Please try again",
    });
  }
};

exports.loginController = async (req, res) => {
  const { email, password } = req.body;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const firstError = errors.array.map((error) => error.msg)[0];
    return res.status(422).json({
      error: firstError,
    });
  } else {
    await User.findOne({
      email,
    }).exec(async (err, user) => {
      if (!user || err) {
        return res.status(400).json({
          error: "Email does not exist you asshole. Signup 3asba!",
        });
      }
      if (!authenthicate(password)) {
        return res.status(400).json({
          error: "Email and password do not match ya sereg ya nayek",
        });
      }
      const token = await jwt.sign(
        {
          _id: user._id,
        },
        process.env.JWT_SECRET,
        {
          expiresIn: "7d",
        }
      );
      const { _id, email, name, role } = user;
      return res.json({
        token,
        user: {
          _id,
          name,
          email,
          role,
        },
      });
    });
  }
};
