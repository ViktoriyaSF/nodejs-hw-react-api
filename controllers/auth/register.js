const bcrypt = require("bcrypt");
const gravatar = require("gravatar");
const { randomUUID } = require("crypto");

const { BASE_URL, PORT } = process.env;

const { ctrlWrapper, sendEmail } = require("../../utils");
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
  const verificationToken = randomUUID(); // craete verificationToken fo email confermd

  const newUser = await User.create({
    ...req.body,
    password: createHashPassword,
    avatarURL,
    verificationToken,
  });

  // send comfermd leter
  const verifyEmail = {
    to: email,
    subject: "Сonfirm your registration",
    html: `<a target="_blank" href="${BASE_URL}:${PORT}/api/auth/verify/${verificationToken}">Click to confirm your registration</a>`,
  };

  await sendEmail(verifyEmail);

  res.status(201).json({
    email: newUser.email,
    subscription: newUser.subscription,
  });
};
register = ctrlWrapper(register);

module.exports = register;
