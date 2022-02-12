const express = require('express');

const v1Controller = require('../controllers/v1Controller');

const router = express.Router();

router.route('/').get(v1Controller.getAllFacilities);

router.route('/:id').get(v1Controller.getFacility);

module.exports = router;
