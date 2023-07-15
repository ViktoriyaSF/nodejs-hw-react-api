const express = require("express");

const schemas = require("../../schemas/schemasUsers");
const { validateBody } = require("../../middlewares");
const ctrl = require("../../controllers/auth");

const router = express.Router();

router.post("/register", validateBody(schemas.registerSchema), ctrl.register);

module.exports = router;
