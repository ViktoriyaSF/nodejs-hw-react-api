const express = require("express");

const contacts = require("../../services/contactsServices");

const {
  getAllContacts,
    getOneContact
    addNewContact,
    updateOneContact,
    deleteOneContact,
} = requiere("../../controllers/contactsControllers")

const router = express.Router();

router.get('/', getAllContacts);
router.get('/:contactId', getOneContact);
router.get('/', addNewContact);
router.get('/:contactId', updateOneContact);
router.get('/:contactId', deleteOneContact);


// router.get("/", async (req, res, next) => {
//   const result = await contacts.listContacts();
//   res.json(result);
//   // res.json({ message: "template message" });
// });

// router.get("/:contactId", async (req, res, next) => {
//   res.json({ message: "template message" });
// });

// router.post("/", async (req, res, next) => {
//   res.json({ message: "template message" });
// });

// router.delete("/:contactId", async (req, res, next) => {
//   res.json({ message: "template message" });
// });

// router.put("/:contactId", async (req, res, next) => {
//   res.json({ message: "template message" });
// });

module.exports = router;
