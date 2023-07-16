const { ctrlWrapper } = require("../../utils");
const { User } = require("../../models/user");

const changeSubscription = ctrlWrapper(async (req, res) => {
  const { subscription } = req.body;
  const { _id } = req.user;
  const updatedUser = await User.findByIdAndUpdate(
    _id,
    { subscription },
    { new: true }
  );

  if (!updatedUser) {
    return res.status(404).json({ message: "User not found" });
  }

  res.json({
    message: `Your subscription has been changed to ${subscription}`,
  });
});

module.exports = changeSubscription;
