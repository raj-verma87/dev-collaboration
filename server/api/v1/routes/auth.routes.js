const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');
const {requiredAuth} = require('../middlewares/auth.middleware');
const asyncHandler = require("../utils/asyncHandler");
const validate = require("../middlewares/validate.middleware");
const { registerSchema, loginSchema } = require("../validators/auth.validator");

router.post('/register', validate(registerSchema), asyncHandler(authController.register));
router.post('/login', validate(loginSchema), asyncHandler(authController.login));

router.get("/me", requiredAuth, (req, res) => {
  res.status(200).json({ user: req.user });
});

module.exports = router;
