const { ctrlWrapper } = require("../../utils");

const register = require("./register");

module.exports = {
  register: ctrlWrapper(register),
};
