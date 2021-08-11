const mongoose = require('mongoose')

const postFileSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Please enter your email!"],
        trim: true,
    },
    url: {
        type: String,
        required: [true],
        trim: true,
        unique: true
    },
    name: {
        type: String,
        required: [true, "Please enter your name!"],
        trim: true,
    },
    caption: {
        type: String,
        trim: true,
        default: 'like and comment'
    },
    likes: {
        type: String,
        default: 0
    },
    comment: {
        type: Array,
        default: []
    },
    reels: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("postFile", postFileSchema)