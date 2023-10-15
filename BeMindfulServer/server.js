const express = require('express')
const app = express()
require('dotenv').config()
const source = process.env.ATLAS_CONNECTION

const cors = require('cors')
app.use(cors())

app.use(express.json())

const userRoutes = require('./controllers/user.controller')
app.use('/users', userRoutes)

app.get("/", (req, res) => res.send("Main page")); 

const mongoose = require('mongoose')

mongoose.connect(source, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const connection = mongoose.connection
connection.once('open', () => {
    console.log("DB connected.");
})

const PORT = 3000;
app.listen(PORT, ()=>{
    console.log(`Successfully served on port: ${PORT}.`);
})

