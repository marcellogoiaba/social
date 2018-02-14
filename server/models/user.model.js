const mongoose = require('mongoose');
let bcrypt = require('bcrypt');

let userSchema = mongoose.Schema({
    email: {
        type: String, 
        lowercase: true,
        unique: true,
        required: true
    },
    username: {
        type: String,
        lowercase: true,
        unique: true,
        required: true
    },
    password: {
        type: String, 
        required: true
    },
    first_name: {
        type: String, 
        required: true
    },
    last_name: { 
        type: String, 
        required: true
    }
});

User = mongoose.model('User', userSchema);
module.exports = User;