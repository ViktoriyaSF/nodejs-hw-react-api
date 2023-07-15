const express = require("express");
const router = express.Router();

const ctrl = require("../../controllers/contacts");

const schemas = require("../../schemas/schemasContacts");
const { validateBody, isValidId, authenticate } = require("../../middlewares");

router.get("/", authenticate, ctrl.getAllContacts);
router.get("/:contactId", authenticate, isValidId, ctrl.getOneContact);
router.post(
  "/",
  authenticate,
  validateBody(schemas.addSchema),
  ctrl.addNewContact
);
router.put(
  "/:contactId",
  authenticate,
  isValidId,
  validateBody(schemas.addSchema),
  ctrl.updateOneContact
);
router.patch(
  "/:contactId/favorite",
  authenticate,
  isValidId,
  validateBody(schemas.updateFavoriteSchema),
  ctrl.updateFavorite
);
router.delete("/:contactId", authenticate, isValidId, ctrl.deleteOneContact);

module.exports = router;
