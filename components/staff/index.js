const express = require('express');
const { getStaffs } = require('./staffController')
const { isLoggedIn } = require('../../utils/login')

const router = express.Router();

router.get('/staff-list', isLoggedIn, getStaffs);

module.exports = router;
