const mongoose = require("mongoose");

const connectDB = async () => {
  const connection = mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
  });
  mongoose.connection.once("open", () =>
    console.log(`MongoDb is Fucking connected!`)
  );
  mongoose.connection.on("error", (err) => console.log(err));
};

module.exports = connectDB;
