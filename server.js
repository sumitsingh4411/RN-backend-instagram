require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')


const app = express()
app.use(express.json())
app.use(cors())


// Routes
app.use('/user', require('./routes/userRouter'))


// Connect to mongodb
const URI = process.env.MONGODB_URL
mongoose.connect('mongodb+srv://sumit:asdf@cluster0.1m8fn.mongodb.net/instagram?retryWrites=true&w=majority', {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err => {
    if(err) throw err;
    console.log("Connected to mongodb")
})



const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log('Server is running on port', PORT)
})