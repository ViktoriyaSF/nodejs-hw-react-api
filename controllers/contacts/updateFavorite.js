const { Contact } = require("../../models/contact");
const { updateFavoriteSchema } = require("../../schemas/schemasContacts");
const { HttpError } = require("../../utils");

const updateFavorite = async (req, res) => {
  // check body
  const { error } = updateFavoriteSchema.validate(req.body);
  if (error) {
    throw new HttpError(400, "missing field favorite");
  }
  const { contactId } = req.params;
  const result = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });
  if (!result) {
    throw new HttpError(404, "Not found");
  }
  res.status(200).json(result);
};

module.exports = updateFavorite;
