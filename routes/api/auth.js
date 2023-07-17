const express = require("express");

const {
  registerSchema,
  loginSchema,
  changeSubscriptionSchema,
} = require("../../schemas/schemasUsers");

const { validateBody, authenticate } = require("../../middlewares");

const {
  register,
  login,
  logout,
  getCurrent,
  changeSubscription,
} = require("../../controllers/auth");

const router = express.Router();

// signup
router.post("/register", validateBody(registerSchema), register);

// singin
router.post("/login", validateBody(loginSchema), login);

router.get("/current", authenticate, getCurrent);

router.post("/logout", authenticate, logout);

router.patch(
  "/",
  authenticate,
  validateBody(changeSubscriptionSchema),
  changeSubscription
);

module.exports = router;
