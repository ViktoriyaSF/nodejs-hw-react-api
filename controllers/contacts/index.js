const { ctrlWrapper } = require("../../utils");

const getAllContacts = require("./getAllContacts");
const getOneContact = require("./getOneContact");
const addNewContact = require("./addNewContact");
const updateOneContact = require("./updateOneContact");
const updateFavorite = require("./updateFavorite");
const deleteOneContact = require("./deleteOneContact");

module.exports = {
  getAllContacts: ctrlWrapper(getAllContacts),
  getOneContact: ctrlWrapper(getOneContact),
  addNewContact: ctrlWrapper(addNewContact),
  updateOneContact: ctrlWrapper(updateOneContact),
  updateFavorite: ctrlWrapper(updateFavorite),
  deleteOneContact: ctrlWrapper(deleteOneContact),
};
