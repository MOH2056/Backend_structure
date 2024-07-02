const User = require('../models/User');

module.exports = async (req, res) => {
  try {
    const user = await User.findOne({
      confirmationToken: req.params.token,
      confirmationTokenExpires: { $gt: Date.now() },
    });
    if (!user) {
      return res.status(400).send('Token is invalid or has expired.');
    }
    user.isConfirmed = true;
    user.confirmationToken = undefined;
    user.confirmationTokenExpires = undefined;
    await user.save();
    res.send('Account confirmed successfully.');
  } catch (error) {
    res.status(400).send(error.message);
  }
};