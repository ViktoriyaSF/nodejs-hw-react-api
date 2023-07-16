const { ctrlWrapper } = require("../../utils");
const { User } = require("../../models/user");

const changeSubscription = ctrlWrapper(async (req, res) => {
  const { _id } = req.user;
  const { subscription = "starter" } = req.body;
  await User.findByIdAndUpdate(_id, { subscription });
  res.json({
    message: `Your subscription has been changed to ${subscription}`,
  });
});

module.exports = changeSubscription;
