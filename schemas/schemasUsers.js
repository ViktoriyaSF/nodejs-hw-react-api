const Joi = require("joi");
const { subscriptionList, emailRegexp } = require("../models/user");

const registerSchema = Joi.object({
  password: Joi.string().min(6).required(),
  email: Joi.string().pattern(emailRegexp).required(),
  subscription: Joi.string().valid(subscriptionList).required(),
});

module.exports = {
  registerSchema,
};
