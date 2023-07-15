const bcrypt = require("bcrypt");
const { User } = require("../../models/user");
const { HttpError } = require("../../utils");
const jwt = require("jsonwebtoken");
const { use } = require("../../routes/api/auth");
const { SECRET_KEY } = process.env;

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw new HttpError(401, "Email or password is wrong");
  }
  const passwordCompare = await bcrypt.compare(password, user.password);
  if (!passwordCompare) {
    throw new HttpError(401, "Email or password is wrong");
  }
  const payload = { id: user._id };

  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "1h" });
  res.json({
    token,
  });
};

module.exports = login;
