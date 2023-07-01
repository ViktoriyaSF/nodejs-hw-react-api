const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
} = require("../services/contactsServices");
const ctrlWrapper = require("../utils/ctrlWrapper");

const getAllContacts = async (req, res, next) => {
    const contacts = await listContacts();
    res.status(200).json(contacts);
};
const getOneContact = async (req, res, next) => {};
const addNewContact = async (req, res, next) => {};
const updateOneContact = async (req, res, next) => {};
const deleteOneContact = async (req, res, next) => {};

module.exports = {
    getAllContacts: ctrlWrapper(getAllContacts),
    getOneContact
    addNewContact,
    updateOneContact,
    deleteOneContact,
};