const Joi = require("joi");
const { subscriptionList, emailRegexp } = require("../models/user");

const registerSchema = Joi.object({
  name: Joi.string().required(),
  password: Joi.string().min(6).required(),
  email: Joi.string().pattern(emailRegexp).required(),
  subscription: Joi.string().valid(subscriptionList).required(),
});

const loginSchema = Joi.object({
  password: Joi.string().min(6).required(),
  email: Joi.string().pattern(emailRegexp).required(),
  subscription: Joi.string().valid(subscriptionList).required(),
});

module.exports = {
  registerSchema,
  loginSchema,
};
