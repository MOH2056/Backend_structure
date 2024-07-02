const User = require('../models/User');

// Registration handler
exports.register = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = new User({ Email: email, password });
        await user.save();
        res.status(201).send('User registered successfully');
    } catch (error) {
        res.status(400).send('Error registering user: ' + error.message);
    }
};

// Login handler
exports.login = (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({ Email: email }, (err, user) => {
        if (err || !user) {
            return res.status(401).send('Email not found');
        }

        bcrypt.compare(password, user.password, (err, result) => {
            if (result) {
                res.send('Login successful');
            } else {
                res.status(401).send('Incorrect password');
            }
        });
    });
};

// Other CRUD operations (as an example, implement as needed)
exports.getUser = async (req, res) => {
    try { 
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).send('User not found');
        res.send(user);
    } catch (error) {
        res.status(400).send('Error fetching user: ' + error.message);
    }
};

// Update and delete handlers should also be implemented similarly
// exports.updateUser = ... 
// exports.deleteUser = ...
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).send('User not found');
        res.send(user);
    } catch (error) {
        res.status(400).send('Error fetching user: ' + error.message);
    }
};

// Update and delete handlers should also be implemented similarly
// exports.updateUser = ... 
// exports.deleteUser = ...
