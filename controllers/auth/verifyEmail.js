const { User } = require("../../models/user");

const { ctrlWrapper } = require("../../utils");
const { HttpError } = require("../../utils");

const verifyEmail = ctrlWrapper(async (req, res) => {
  const { verificationToken } = req.params;
  const user = await User.findOne({ verificationToken });
  if (!user) {
    throw new HttpError(404, "Not found verification token");
  }
  await User.findByIdAndUpdate(user._id, {
    verify: true,
    verificationToken: "",
  });
  res.json({
    message: "Email verify success",
  });
});

module.exports = verifyEmail;
