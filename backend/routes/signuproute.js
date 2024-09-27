const express = require('express');
const router = express.Router();
const SignUpController = require('../controller/signupcontroller')


router.post('/SignUp',SignUpController.SignUp)
router.post('/SignIn',SignUpController.SignIn)
router.post('/MenuItem',SignUpController.MenuItem)


module.exports = router;