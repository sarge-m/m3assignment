const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController'); 
router
 .route('/')
 .get(userController.getAllUsers)

router
 .route('/joined')
 .get(userController.getUsersByID)
module.exports = router;