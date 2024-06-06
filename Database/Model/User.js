const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true
    },
    title: {
        type: String,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    password: {
        type: String,
        require: true
    },
    image: {
        type: String,
        default: true
    }
}, { timestamps: true })

const User = mongoose.model('Users', UserSchema)

module.exports = User