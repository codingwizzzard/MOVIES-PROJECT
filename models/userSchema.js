const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    rating: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    }
})

const userDB = mongoose.model('userTbl', userSchema)

module.exports = userDB