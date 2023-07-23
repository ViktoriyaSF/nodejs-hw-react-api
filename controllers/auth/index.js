const register = require("./register");
const login = require("./login");
const getCurrent = require("./current");
const logout = require("./logout");
const changeSubscription = require("./changeSubscription");
const updateAvatar = require("./updateAvatar");
const verifyEmail = require("./verifyEmail");

module.exports = {
  register,
  login,
  logout,
  getCurrent,
  changeSubscription,
  updateAvatar,
  verifyEmail,
};
