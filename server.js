const express = require('express')
const morgan = require('morgan')
const bodyparser = require('body-parser')
const cors = require('cors')


require('dotenv').config({
    path:'./server/config/config.env'
})
const app = express()

// if (process.env.NODE_ENV === 'development') {
//     app.use(cors({
//         origin: process.env.CLIENT_URL
//     }))
//     app.use(morgan('dev'))
// }

const PORT = process.env.PORT

app.listen(PORT,()=>{
    console.log(`App is Fucking working! ${PORT}`)
})