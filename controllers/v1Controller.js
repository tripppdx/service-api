const fs = require('fs');

const facilities = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/avalon.json`)
);

const getAllFacilities = async (_, res) => {
  res.status(200).json({
    status: 'success',
    results: facilities.length,
    data: {
      facilities,
    },
  });
};

const getFacility = (req, res) => {
  const id = req.params.id * 1;
  const facility = facilities.find(el => el.id === id);

  if (!facility) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID',
    });
  }
  res.status(200).json({
    status: 'success',
    data: {
      facility,
    },
  });
};

module.exports = { getAllFacilities, getFacility };
