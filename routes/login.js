const User = require('../models/User');
const bcrypt = require('bcrypt');

module.exports = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).send('Username not found');
    }
    if (!user.isConfirmed) {
      return res.status(403).send('Please confirm your email to login.');
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      res.send('Login successful');
    } else {
      res.status(401).send('Incorrect password');
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};