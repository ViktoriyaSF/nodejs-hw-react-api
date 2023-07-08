const { Contact } = require("../../models/contact");
const { HttpError } = require("../../utils");

const getOneContact = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findById(contactId);
  if (!result) {
    throw new HttpError(404, `Not found contact with id: ${contactId}`);
  }
  res.status(200).json(result);
};

module.exports = getOneContact;
