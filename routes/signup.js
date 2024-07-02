const User = require('../models/User');
const bcrypt = require('bcrypt');
const crypto = require('crypto');

module.exports = async (req, res) => {
  try {
    const { fullName, email, phoneNumber, username, password, country } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const confirmationToken = crypto.randomBytes(20).toString('hex');
    const confirmationTokenExpires = Date.now() + 3600000;
    const newUser = new User({
      fullName,
      email,
      phoneNumber,
      username,
      password: hashedPassword,
      country,
      confirmationToken,
      confirmationTokenExpires,
    });
    await newUser.save();
    // Send confirmation email with token (implementation depends on your email service)
    // sendConfirmationEmail(email, confirmationToken);
    res.status(201).send('User registered successfully. Please check your email to confirm your account.');
  } catch (error) {
    res.status(400).send(error.message);
  }
};
``