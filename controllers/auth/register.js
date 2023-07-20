const bcrypt = require("bcrypt");
const gravatar = require("gravatar");

const { ctrlWrapper } = require("../../utils");
const { User } = require("../../models/user");
const { HttpError } = require("../../utils");

let register = async (req, res) => {
  // email similarity check
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw new HttpError(409, "Email already in use");
  }

  const createHashPassword = await bcrypt.hash(password, 10);
  const avatarURL = gravatar.url(email);

  const newUser = await User.create({
    ...req.body,
    password: createHashPassword,
    avatarURL,
  });
  res.status(201).json({
    email: newUser.email,
    subscription: newUser.subscription,
  });
};
register = ctrlWrapper(register);

module.exports = register;
