const {
  listContacts,
  getContactById,
  addContact,
  updateContact,
  removeContact,
} = require("../services/contactsServices");

const ctrlWrapper = require("../utils/ctrlWrapper");

const getAllContacts = async (req, res) => {
  const contacts = await listContacts();
  res.status(200).json(contacts);
};

const getOneContact = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const result = await getContactById(contactId);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const addNewContact = async (req, res) => {
  const newContact = await addContact(req.body);
  res.status(201).json(newContact);
};
const updateOneContact = async (req, res) => {
  const { contactId } = req.params;
  const updatedContact = await updateContact(contactId, req.body);
  res.status(200).json(updatedContact);
};
const deleteOneContact = async (req, res) => {
  const { contactId } = req.params;
  const deletedContact = await removeContact(contactId);
  res.status(200).json({ id: contactId });
};

module.exports = {
  getAllContacts: ctrlWrapper(getAllContacts),
  getOneContact,
  // getOneContact: ctrlWrapper(getOneContact),
  addNewContact: ctrlWrapper(addNewContact),
  updateOneContact: ctrlWrapper(updateOneContact),
  deleteOneContact: ctrlWrapper(deleteOneContact),
};
