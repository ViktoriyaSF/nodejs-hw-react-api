const express = require("express");

const schemas = require("../../schemas/schemasUsers");
const { validateBody } = require("../../middlewares");
const ctrl = require("../../controllers/auth");

const router = express.Router();

// signup
router.post("/register", validateBody(schemas.registerSchema), ctrl.register);

// singin
router.post("/login", validateBody(schemas.loginSchema), ctrl.login);

module.exports = router;
