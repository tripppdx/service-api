const Service = require('../models/serviceModel');

const getAllFacilities = async (_, res) => {
  try {
    const facilities = await Service.find();
    res.status(200).json({
      status: 'success',
      results: facilities.length,
      data: {
        facilities,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

const getFacility = async (req, res) => {
  try {
    const facility = await Service.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        facility,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

module.exports = { getAllFacilities, getFacility };
