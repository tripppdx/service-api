const express = require('express');

const v2Controller = require('../controllers/v2Controller');

const router = express.Router();

router.route('/').get(v2Controller.getAllFacilities);

router.route('/:id').get(v2Controller.getFacility);

module.exports = router;
