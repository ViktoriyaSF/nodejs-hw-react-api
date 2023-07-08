const express = require("express");

const {
  // getAllContacts,
  // getOneContact,
  addNewContact,
  // updateOneContact,
  // deleteOneContact,
} = require("../../controllers/contactsControllers");

const { addSchema } = require("../../schemas/schemasContacts");
const validateBody = require("../../middlewares/validateBody");

const router = express.Router();

// router.get("/", getAllContacts);
// router.get("/:contactId", getOneContact);
router.post("/", validateBody(addSchema), addNewContact);
// router.patch("/:contactId", validateBody(addSchema), updateOneContact);
// router.delete("/:contactId", deleteOneContact);

module.exports = router;
