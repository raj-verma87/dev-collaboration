const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');
const {requiredAuth} = require('../middlewares/auth.middleware');

router.post('/register',authController.register);
router.post('/login', authController.login);

router.get("/me", requiredAuth, (req, res) => {
  res.status(200).json({ user: req.user });
});

module.exports = router;
