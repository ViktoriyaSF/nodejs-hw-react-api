const { Contact } = require("../../models/contact");
const { ctrlWrapper } = require("../../utils");

const addNewContact = ctrlWrapper(async (req, res) => {
  const { _id: owner } = req.user;
  const newContact = await Contact.create({ ...req.body, owner });
  res.status(201).json(newContact);
});

module.exports = addNewContact;
