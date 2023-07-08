const { Contact, schemas } = require("../models/contact");
const { HttpError } = require("../utils/HttpError");

const ctrlWrapper = require("../utils/ctrlWrapper");

const getAllContacts = async (req, res) => {
  const contacts = await Contact.find();
  res.status(200).json(contacts);
};

const getOneContact = async (req, res) => {
  const { contactId } = req.params;
  // const result = await Contact.findOne({ _id: contactId });
  const result = await Contact.findById(contactId);
  if (!result) {
    throw new HttpError(404, `Not found contact with id: ${contactId}`);
  }
  res.status(200).json(result);
};

const addNewContact = async (req, res) => {
  const newContact = await Contact.create(req.body);
  // const newContact = await addContact(req.body);
  res.status(201).json(newContact);
};

const updateOneContact = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });
  if (!result) {
    throw new HttpError(404, `Not found contact with id: ${contactId}`);
  }
  res.status(200).json(result);
};

const updateFavorite = async (req, res) => {
  // check body
  const { error } = schemas.updateFavoriteSchema.validate(req.body);
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

const deleteOneContact = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndDelete(contactId);
  if (!result) {
    throw new HttpError(404, `Not found contact with id: ${contactId}`);
  }
  res.status(200).json("contact successfully deleted");
};

module.exports = {
  getAllContacts: ctrlWrapper(getAllContacts),
  getOneContact: ctrlWrapper(getOneContact),
  addNewContact: ctrlWrapper(addNewContact),
  updateOneContact: ctrlWrapper(updateOneContact),
  updateFavorite: ctrlWrapper(updateFavorite),
  deleteOneContact: ctrlWrapper(deleteOneContact),
};
