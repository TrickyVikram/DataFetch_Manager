const express = require('express');
const { getUsers } = require('../controllers/userController');
const router = express.Router();

// Define the route for fetching users
router.get('/', getUsers);

module.exports = router;
