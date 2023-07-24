const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { ctrlWrapper } = require("../../utils");
const { User } = require("../../models/user");
const { HttpError } = require("../../utils");

const { SECRET_KEY } = process.env;

let login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    throw new HttpError(401, "Email or password is wrong");
  }
  const passwordCompare = await bcrypt.compare(password, user.password);
  if (!passwordCompare) {
    throw new HttpError(401, "Email or password is wrong");
  }
  if (!user.verify) {
    throw new HttpError(401, "You are not verified");
  }
  const payload = { id: user._id };

  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "5d" });
  await User.findByIdAndUpdate(user._id, { token }); // written in the database

  res.json({
    token,
  });
};
login = ctrlWrapper(login);

module.exports = login;
