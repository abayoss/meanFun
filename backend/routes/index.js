const express = require('express');
const router = express();

const checkAuth = require('../middleware/checkAuth');

const authRoutes = require('./auth/user');
const publicRoutes = require('./public');
const privateRoutes = require('./private');



router.use('/auth', authRoutes);
router.use('/public', publicRoutes);
router.use('/private', checkAuth, privateRoutes);

module.exports = router;
