const express = require('express');
const router = express.Router();
const urlController = require('../controllers/UrlController');
const authenticateUser  = require('../config/Auth')



router.post('/shorten',authenticateUser,urlController.shorten);
router.get('/:shortUrl',urlController.shortUrl);


module.exports=router;