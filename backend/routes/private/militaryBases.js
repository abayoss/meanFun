const express = require('express');
const router = express();

const basesController = require('../../controllers/private/militaryBases');

// routes : /public/bases
router.post('/', basesController.addbase );
router.get('/', basesController.getbases );
router.get('/:id', basesController.getbase );
router.put('/:id', basesController.editbase );

module.exports = router;