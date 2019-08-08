const express = require('express');
const router = express();

const basesRoutes = require('./militaryBases');
router.use('/bases', basesRoutes );

router.get('', () => console.log('hey there from private'));

module.exports = router;