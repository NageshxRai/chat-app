const jwt = require("jsonwebtoken");
let jwtSecret = "Helloworldhelloall#";
const jwToken = (id) => {
  return jwt.sign({ id }, jwtSecret, {
    expiresIn: "30d",
  });
};

module.exports = jwToken;
