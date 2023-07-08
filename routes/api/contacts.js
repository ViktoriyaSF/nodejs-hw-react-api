const express = require("express");

const {
  getAllContacts,
  getOneContact,
  addNewContact,
  updateOneContact,
  updateFavorite,
  deleteOneContact,
} = require("../../controllers/contactsControllers");

// const { addSchema } = require("../../schemas/schemasContacts");
const { schemas } = require("../../models/contact.js");
const validateBody = require("../../middlewares/validateBody");
const isValidId = require("../../middlewares/isValidateById");

const router = express.Router();

router.get("/", getAllContacts);
router.get("/:contactId", isValidId, getOneContact);
router.post("/", validateBody(schemas.addSchema), addNewContact);
router.put(
  "/:contactId",
  isValidId,
  validateBody(schemas.addSchema),
  updateOneContact
);
router.patch(
  "/:contactId/favorite",
  isValidId,
  validateBody(schemas.updateFavoriteSchema),
  updateFavorite
);
router.delete("/:contactId", isValidId, deleteOneContact);

module.exports = router;
