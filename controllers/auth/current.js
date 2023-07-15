const { ctrlWrapper } = require("../../utils");

const getCurrent = ctrlWrapper(async (req, res) => {
  const { email, subscription } = req.user;
  res.status(200).json({
    email,
    subscription,
  });
});

module.exports = getCurrent;
