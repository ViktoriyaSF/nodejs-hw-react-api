const bcrypt = require("bcrypt");
const { User } = require("../../models/user");
const { HttpError } = require("../../utils");

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

  const token = "gjjkkgkf";
  res.json({
    token,
  });
};

module.exports = login;
