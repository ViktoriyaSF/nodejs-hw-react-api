const { Contact } = require("../../models/contact");

const getAllContacts = async (req, res) => {
  const { _id: owner } = req.user;
  const contacts = await Contact.find({ owner });
  res.status(200).json(contacts);
};

module.exports = getAllContacts;
