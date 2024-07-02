// auth.middleware.js
const jwt = require("jsonwebtoken");

const authenticate = async (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) {
    return res.status(401).send("Unauthorized");
  }
  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const user = await User.findById(someUserId);
    req.user = user;
    next();
  } catch (err) {
    return res.status(401).send("Invalid token");
  }
};

module.exports = authenticate;
