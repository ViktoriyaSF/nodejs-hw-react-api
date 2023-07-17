const express = require("express");
const router = express.Router();

const {
  getAllContacts,
  getOneContact,
  addNewContact,
  updateOneContact,
  updateFavorite,
  deleteOneContact,
} = require("../../controllers/contacts");

const {
  addSchema,
  updateFavoriteSchema,
} = require("../../schemas/schemasContacts");

const { validateBody, isValidId, authenticate } = require("../../middlewares");

router
  .route("/")
  .get(authenticate, getAllContacts)
  .post(authenticate, validateBody(addSchema), addNewContact);

router
  .route("/:contactId")
  .get(authenticate, isValidId, getOneContact)
  .put(authenticate, isValidId, validateBody(addSchema), updateOneContact)
  .delete(authenticate, isValidId, deleteOneContact);
router
  .route("/:contactId/favorite")
  .patch(
    authenticate,
    isValidId,
    validateBody(updateFavoriteSchema),
    updateFavorite
  );

module.exports = router;

// router.get("/", authenticate, getAllContacts);
// router.post("/", authenticate, validateBody(addSchema), addNewContact);
// router.get("/:contactId", authenticate, isValidId, getOneContact);
// router.put(
//   "/:contactId",
//   authenticate,
//   isValidId,
//   validateBody(addSchema),
//   updateOneContact
// );
// router.delete("/:contactId", authenticate, isValidId, deleteOneContact);

// router.patch(
//   "/:contactId/favorite",
//   authenticate,
//   isValidId,
//   validateBody(updateFavoriteSchema),
//   updateFavorite
// );
