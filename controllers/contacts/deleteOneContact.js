const { Contact } = require("../../models/contact");
const { HttpError } = require("../../utils");

const deleteOneContact = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndDelete(contactId);
  if (!result) {
    throw new HttpError(404, `Not found contact with id: ${contactId}`);
  }
  res.status(200).json("contact successfully deleted");
};

module.exports = deleteOneContact;
