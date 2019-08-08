const express = require('express');
const router = express();

const motorsController = require('../../controllers/public/motors');

// routes : /public/motors
router.post('/', motorsController.addMotor );
router.get('/', motorsController.getMotors );
router.get('/:id', motorsController.getMotor );
router.put('/:id', motorsController.editMotor );

module.exports = router;