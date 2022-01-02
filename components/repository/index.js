const express = require('express');
const { getProducts, getHistoryImporting } = require('./reposController')
const { isLoggedIn } = require('../../utils/login')

const router = express.Router();

router.get('/inventory', isLoggedIn, getProducts);

router.get('/importing', isLoggedIn, getHistoryImporting);

module.exports = router;