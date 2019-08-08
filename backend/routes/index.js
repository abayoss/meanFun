const express = require('express');
const router = express();

const publicRoutes = require('./public');
const privateRoutes = require('./private');

router.use('/public', publicRoutes);
router.use('/private', privateRoutes);
router.get('', () => console.log('hey there from the backend'));

module.exports = router;
