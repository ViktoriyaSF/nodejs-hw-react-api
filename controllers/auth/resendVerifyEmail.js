const { User } = require("../../models/user");
const { ctrlWrapper, sendEmail } = require("../../utils");
const { HttpError } = require("../../utils");

const { BASE_URL, PORT } = process.env;

const resendVerifyEmail = ctrlWrapper(async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw new HttpError(401, "Email not found");
  }
  if (user.verify) {
    throw new HttpError(400, "Verification has already been passed");
  }
  await sendEmail({
    to: email,
    subject: "Сonfirm your registration 📌",
    html: `<a target="_blank" href="${BASE_URL}:${PORT}/api/auth/verify/${user.verificationToken}">Click to confirm your registration</a>`,
  });

  res.json({
    message: "Verify email send success. Please confirm your registration 📌",
  });
});

module.exports = resendVerifyEmail;
