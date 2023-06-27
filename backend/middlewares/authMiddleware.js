const jwt = require("jsonwebtoken");
const User = require("../Models/userModel");
const asyncHandler = require("express-async-handler");

const protect = asyncHandler(async (req, res, next) => {
  let token;
  let jwtSecret = "Helloworldhelloall#";
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      const decoded = jwt.verify(token, jwtSecret);
      req.user = await User.findById(decoded.id).select("-password");
      next();
    } catch (error) {
      res.status(400);
      throw new Error("Not authorized, token failed");
    }
  }
  if (!token) {
    res.status(400);
    throw new Error("Not authorized, no token");
  }
});
module.exports = protect;
