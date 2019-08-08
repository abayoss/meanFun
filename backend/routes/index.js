const express = require('express');
const router = express();

const checkAuth = require('../middleware/checkAuth');

const authRoutes = require('./auth/user');
const publicRoutes = require('./public');
const privateRoutes = require('./private');



router.use('/auth', authRoutes);
router.use('/public', publicRoutes);
router.use('/private', checkAuth, privateRoutes);
router.use('', (req, res) => res.json({message: 'no route matches the one you requested'}));


module.exports = router;
