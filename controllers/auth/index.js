const register = require("./register");
const login = require("./login");
const getCurrent = require("./current");
const logout = require("./logout");
const changeSubscription = require("./changeSubscription");
const updateAvatar = require("./updateAvatar");

module.exports = {
  register,
  login,
  logout,
  getCurrent,
  changeSubscription,
  updateAvatar,
};
