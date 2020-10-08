const mongoose = require('mongoose')

const connectDB = async () => {
    const connection = mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: true,
        useUnifiedTopology: true
    })
    console.log(`MongoDB is fucking connected! ${connection.connection.host}`)
}


module.exports = connectDB