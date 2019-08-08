const express = require('express');
const router = express();

const basesRoutes = require('./militaryBases');
router.use('/bases', basesRoutes);


module.exports = router;
