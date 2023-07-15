const express = require("express");

const schemas = require("../../schemas/schemasUsers");
const { validateBody, authenticate } = require("../../middlewares");
const ctrl = require("../../controllers/auth");

const router = express.Router();

// signup
router.post("/register", validateBody(schemas.registerSchema), ctrl.register);

// singin
router.post("/login", validateBody(schemas.loginSchema), ctrl.login);

router.get("/current", authenticate, ctrl.getCurrent);

module.exports = router;
