const mongoose = require('mongoose')
const Schema = mongoose.Schema

const dataSchema = new Schema({
   // name: { type: String, required: true },
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    mood: { type: Number, required: true },
    q1: { type: String, required: true },
    q2: { type: String, required: true },
})

const Data = mongoose.model('Data', dataSchema)
module.exports = Data