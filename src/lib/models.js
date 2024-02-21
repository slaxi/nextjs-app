const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        min: 3, 
        max: 20
    },
    email: {
        type: String,
        required: true,
        unique: true,
        max: 50
    },
    password: {
        type: String,
        required: true,
        unique: true,
        min: 6
    },
    image: {
        type: String,
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
}, {timestamps: true}) // adding a time stamp for each user

const postsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
    userId: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true,
        unique: true
    }
}, {timestamps: true}) // adding a time stamp for each user


export const User = mongoose.model.User || mongoose.model('User', userSchema)
export const Post = mongoose.model.Post || mongoose.model('Post', postsSchema)


