const { ctrlWrapper } = require("../../utils");
const { User } = require("../../models/user");

const logout = ctrlWrapper(async (req, res) => {
  const { _id } = req.user;
  await User.findByIdAndUpdate(_id, { token: "" });
  res.status(200).json("Success!✔ No Content");
});

module.exports = logout;
