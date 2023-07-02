const {
  listContacts,
  getContactById,
  addContact,
  updateContact,
  removeContact,
} = require("../services/contactsServices");

// const Joi = require("joi");
// const { HttpError } = require("../utils/HttpError");
// const addSchema = Joi.object({
//   name: Joi.string().required(),
//   email: Joi.string().required(),
//   phone: Joi.string().required(),
// });

const ctrlWrapper = require("../utils/ctrlWrapper");

const getAllContacts = async (req, res) => {
  const contacts = await listContacts();
  res.status(200).json(contacts);
};

const getOneContact = async (req, res) => {
  const { contactId } = req.params;
  const result = await getContactById(contactId);
  res.status(200).json(result);
};
const addNewContact = async (req, res) => {
  // const { error } = addSchema.validate(req.body);
  // if (error) {
  //   throw new HttpError(404, error.message);
  // }
  const newContact = await addContact(req.body);
  res.status(201).json(newContact);
};
const updateOneContact = async (req, res) => {
  // const { error } = addSchema.validate(req.body);
  // if (error) {
  //   throw new HttpError(404, error.message);
  // }
  const { contactId } = req.params;
  const updatedContact = await updateContact(contactId, req.body);
  res.status(200).json(updatedContact);
};
const deleteOneContact = async (req, res) => {
  const { contactId } = req.params;
  const deletedContact = await removeContact(contactId);
  res.status(200).json("contact successfully deleted");
};

module.exports = {
  getAllContacts: ctrlWrapper(getAllContacts),
  getOneContact: ctrlWrapper(getOneContact),
  addNewContact: ctrlWrapper(addNewContact),
  updateOneContact: ctrlWrapper(updateOneContact),
  deleteOneContact: ctrlWrapper(deleteOneContact),
};
