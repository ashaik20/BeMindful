const mongoose = require('mongoose')
const Schema = mongoose.Schema

const dataSchema = new Schema({
    email: {type: String, required: true},
    mood: { type: Number, required: true },
    q1: { type: String, required: true },
    q2: { type: String, required: true },
})

const Data = mongoose.model('Data', dataSchema)
module.exports = Data