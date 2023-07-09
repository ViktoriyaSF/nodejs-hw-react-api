const express = require("express");
const router = express.Router();

const ctrl = require("../../controllers/contacts");

const { schemas } = require("../../models/contact.js");
const { validateBody, isValidId } = require("../../middlewares");

router.get("/", ctrl.getAllContacts);
router.get("/:contactId", isValidId, ctrl.getOneContact);
router.post("/", validateBody(schemas.addSchema), ctrl.addNewContact);
router.put(
  "/:contactId",
  isValidId,
  validateBody(schemas.addSchema),
  ctrl.updateOneContact
);
router.patch(
  "/:contactId/favorite",
  isValidId,
  validateBody(schemas.updateFavoriteSchema),
  ctrl.updateFavorite
);
router.delete("/:contactId", isValidId, ctrl.deleteOneContact);

module.exports = router;
