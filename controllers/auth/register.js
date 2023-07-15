const { User } = require("../../models/user");
const { HttpError } = require("../../utils");

const register = async (req, res) => {
  // email similarity check
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw new HttpError(409, "Email already in use");
  }

  const newUser = await User.create(req.body);
  res.status(201).json({
    email: newUser.email,
    subscription: newUser.subscription,
  });
};
module.exports = register;
