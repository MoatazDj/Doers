const express = require("express");
const morgan = require("morgan");
const path = require("path");
const bodyparser = require("body-parser");
const cors = require("cors");
const connectDB = require("./server/config/db.js");
// const pathFile = path.join(__dirname, "client", "build");
const app = express();

require("dotenv").config({
  path: "./server/config/.env",
});

connectDB();
app.use(morgan("dev"));
app.use(cors());
// app.use(express.static(pathFile));
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

// if (process.env.NODE_ENV !== "development") {
//   app.options(
//     "*",
//     cors({
//       origin: process.env.CLIENT_URL,
//     })
//   );
//   app.use(morgan("dev"));
// }

const authRouter = require("./server/routers/auth.route.js");

app.use("/api", authRouter);

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Page not found",
  });
});

const PORT = process.env.PORT;

app.listen(PORT, (err, res) => {
  if (!err) {
    console.log(`App is Fucking working! on port: ${PORT}`);
  }
});
