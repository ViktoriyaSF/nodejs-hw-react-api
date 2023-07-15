const jwt = require("jsonwebtoken");

const { User } = require("../models/user");
const { HttpError } = require("../utils");

const { SECRET_KEY } = process.env;

const authenticate = async (req, res, next) => {
  const { authorization = "" } = req.headers;
  const [bearer, token] = authorization.split(" ");
  if (bearer !== "Bearer") {
    next(new HttpError(401, "Not authorized 🤷‍♀️")); // incorect headers
  }
  try {
    const { id } = jwt.verify(token, SECRET_KEY);
    const user = await User.findById(id);
    if (!user || !user.token || user.token !== token) {
      next(new HttpError(401, "Not authorized 🤦‍♀️")); // incorect id or token
    }
    req.user = user; // which user is this  !!!written in the database
    next();
  } catch {
    next(new HttpError(401, "Not authorized 😒🤔")); // other options
  }
};

module.exports = authenticate;
