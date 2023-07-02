const express = require("express");

const {
  getAllContacts,
  getOneContact,
  addNewContact,
  updateOneContact,
  deleteOneContact,
} = require("../../controllers/contactsControllers");

const router = express.Router();

router.get("/", getAllContacts);
router.get("/:contactId", getOneContact);
router.post("/", addNewContact);
router.patch("/:contactId", updateOneContact);
router.delete("/:contactId", deleteOneContact);

module.exports = router;
