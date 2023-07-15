const { Contact } = require("../../models/contact");

const getAllContacts = async (req, res) => {
  const { _id: owner } = req.user;
  // pagination
  const { page = 1, limit = 10 } = req.query;
  const skip = (page - 1) * limit;
  const contacts = await Contact.find({ owner }, null, { skip, limit });
  res.status(200).json(contacts);
};

module.exports = getAllContacts;
