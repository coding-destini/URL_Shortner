const express = require('express');
const router = express.Router(); // express has some methods and Router() is one of them

router.use('/user',require('./user'));
router.use('/url',require('./url'));


module.exports=router;