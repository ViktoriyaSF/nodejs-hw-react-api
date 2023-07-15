const { Contact } = require("../../models/contact");

const addNewContact = async (req, res) => {
  const { _id: owner } = req.user;
  const newContact = await Contact.create({ ...req.body, owner });
  res.status(201).json(newContact);
};

module.exports = addNewContact;
