const { Schema, model } = require("mongoose");

const { handleSchemaValidationErrors } = require("../utils");

const phoneRegexp = /^(\(\d{3}\)) \d{3}-\d{4}$/;

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
      match: phoneRegexp,
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

contactSchema.post("save", handleSchemaValidationErrors);

const Contact = model("contact", contactSchema);

module.exports = {
  Contact,
  phoneRegexp,
};
