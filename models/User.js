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
});

const User = mongoose.model('User', loginSchema);

User.findOne({ Email: email }, (err, user) => {
    if (!user) {
        res.status(401).send('Email not found');
    } else {if (password === user.password) {
        res.send('Login successful');
    } else {
        res.status(401).send('Incorrect password');
    }
}
});