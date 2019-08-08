const express = require('express');
const router = express();

const motorsRoutes = require('./motors');
router.use('/motors', motorsRoutes );

module.exports = router;