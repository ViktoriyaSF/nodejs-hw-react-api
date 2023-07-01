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
router.get("/:id", getOneContact);
router.post("/", addNewContact);
router.patch("/:id", updateOneContact);
router.delete("/:id", deleteOneContact);

module.exports = router;