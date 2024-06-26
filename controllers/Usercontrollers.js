const User = require('../models/User');

server.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({ Email: email }, (err, user) => {
    if (!user) {
        res.status(401).send('Email not found');
    } else {
        bcrypt.compare(password, user.password, (err, result) =>{
            if (result) {
                res.send('Login successful');
            } else {
                res.status(401).send('Incorrect password');
            }
        })
    }
});
});

module.exports = Usercontrollers;