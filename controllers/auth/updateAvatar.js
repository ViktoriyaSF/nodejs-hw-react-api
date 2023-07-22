const fs = require("fs/promises");
const path = require("path");

const { ctrlWrapper, newAvatarSize } = require("../../utils");
const { User } = require("../../models/user");

const avatarsDir = path.join(__dirname, "..", "..", "public", "avatars");

const updateAvatar = ctrlWrapper(async (req, res) => {
  const { _id } = req.user;
  const { path: tempUplLoad, originalname } = req.file; // find the past path(tmp) and name
  const fieldname = `${_id}_${originalname}`;
  const resltUpload = path.join(avatarsDir, fieldname); // new path (public)

  await newAvatarSize(tempUplLoad); // Resize the image and save it
  await fs.rename(tempUplLoad, resltUpload); // move from tmp to public

  const avatarURL = path.join("avatar", fieldname); // record a new path in the database
  await User.findByIdAndUpdate(_id, { avatarURL }); // rename avatarURL
  res.status(200).json({
    avatarURL,
  });
});

module.exports = updateAvatar;
