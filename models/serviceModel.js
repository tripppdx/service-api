const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  facilityName: {
    type: String,
    required: [true, 'A facility must have a name'],
  },
  services: [
    {
      serviceType: {
        type: String,
        required: [true, 'A service must have a type'],
      },
      durationHours: {
        type: Number,
        required: [true, 'A service must have a duration'],
      },
      price: [
        {
          amount: {
            type: Number,
            required: [true, 'A price must have an amount'],
          },
          currency: {
            type: String,
            required: [true, 'A price must have a currency'],
          },
          type: {
            type: String,
            default: 'Normal',
          },
        },
      ],
      makesExcluded: [String],
      mileageRestriction: {
        type: Number,
      },
    },
  ],
});

const Service = mongoose.model('Service', serviceSchema);

module.exports = Service;
