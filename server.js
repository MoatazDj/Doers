const express = require("express");
const morgan = require("morgan");
const bodyparser = require("body-parser");
const cors = require("cors");
const connectDB = require("./server/config/db.js");

const app = express();

require("dotenv").config({
  path: "./server/config/.env",
});

connectDB();

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

if (process.env.NODE_ENV !== "development") {
  app.use(
    cors({
      origin: process.env.CLIENT_URL,
    })
  );
  app.use(morgan("dev"));
}

const authRouter = require("./server/routers/auth.route.js");

app.use("/api/", authRouter);

app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: "Page not found",
  });
});

const PORT = process.env.PORT;

app.listen(PORT, (err) => {
  if (!err) {
    console.log(`App is Fucking working! on port: ${PORT}`);
  }
});
