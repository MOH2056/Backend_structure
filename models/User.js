const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const nodemailer = require ('nodemailer')
const loginSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        unique: true,
        minlength: 6,
    },
    phoneNumber: {
        type: String,
        required: true,
        match: /^\d{10}$/,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    confirmationTokenExpires: {
        type: Date,
    },
    isConfirmed: {
        type:Boolean,
        default: false,
    }
});

// Pre-save hook to hash the password
loginSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
});

const User = mongoose.model('User', loginSchema);
module.exports = User;
