const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController');



router.post('/login',userController.SignIn);
router.post('/register',userController.SignUp);

module.exports=router;