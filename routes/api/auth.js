const express = require("express");

const {
  registerSchema,
  loginSchema,
  changeSubscriptionSchema,
} = require("../../schemas/schemasUsers");

const { validateBody, authenticate, upload } = require("../../middlewares");

const {
  register,
  login,
  logout,
  getCurrent,
  changeSubscription,
  updateAvatar,
  verifyEmail,
} = require("../../controllers/auth");

const router = express.Router();

// signup
router.post("/register", validateBody(registerSchema), register);

router.get("/verify/:verificationToken", verifyEmail);

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

router.patch("/avatars", authenticate, upload.single("avatar"), updateAvatar);

module.exports = router;
