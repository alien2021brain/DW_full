const express = require("express");
const router = express.Router();
const { register, login, otpVerification } = require("../controller/auth.js");

router.post("/register", register);
router.post("/login", login);
router.post("/otp", otpVerification);

module.exports = router;
