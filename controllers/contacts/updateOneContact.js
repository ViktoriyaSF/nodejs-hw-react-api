const { Contact } = require("../../models/contact");
const { HttpError } = require("../../utils");
const { ctrlWrapper } = require("../../utils");

const updateOneContact = ctrlWrapper(async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });
  if (!result) {
    throw new HttpError(404, `Not found contact with id: ${contactId}`);
  }
  res.status(200).json(result);
});

module.exports = updateOneContact;
