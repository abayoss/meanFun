const express = require('express');
const router = express();

const motorsRoutes = require('./motors');
router.use('/motors', motorsRoutes );

router.get('', () => console.log('hey there from public'));

module.exports = router;