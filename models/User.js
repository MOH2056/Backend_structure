const mongoose = require(mongoose);
const loginSchema = new mongoose.Schema({
    Email: {
        type: String,
        required: true,
        match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$,/,
        unique: true,
        //maxlength: 30,
        minlength: 6,

    },
    password: {
        type: String,
        required: true,
        unique: true,
    }
})
