const { Schema, model } = require("mongoose");
const Joi = require("joi");

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      match: /^(\(\d{3}\)) \d{3}-\d{4}$/,
      unique: true,
      required: true,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false }
);

const Contact = model("contact", contactSchema);

const addSchema = Joi.object({
  name: Joi.string().alphanum().min(3).max(30).required(),
  email: Joi.string().email().required(),
  phone: Joi.string().required(),
});

const updateFavoriteSchema = Joi.object({
  favorite: Joi.string().required(),
});

module.exports = {
  Contact,
  addSchema,
  updateFavoriteSchema,
};
