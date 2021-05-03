const express = require('express');
const router = express.Router();
const controller = require('./controller')

/* GET users listing. */
router.get('/', controller.list.bind(controller));

module.exports = router;
