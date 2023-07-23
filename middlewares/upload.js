const multer = require("multer");
const path = require("path");

const tmpDir = path.join(__dirname, "..", "tmp");
const avatarSize = 1048576; // 1 MB

const multerConfig = multer.diskStorage({
  destination: tmpDir,
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
  limits: {
    fileSize: avatarSize,
  },
});

const upload = multer({
  storage: multerConfig,
});

module.exports = upload;
