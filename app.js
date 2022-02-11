const fs = require('fs');
const express = require('express');

const app = express();

const facilities = JSON.parse(
  fs.readFileSync(`${__dirname}/./dev-data/data/avalon.json`)
);

app.get('/api/v1/services/:id', (req, res) => {
  const id = req.params.id;
  const facility = facilities.find(el => el._id === id);

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
});

app.get('*', (_, res) => {
  res.status(200).json({
    status: 'success',
    data: "These aren't the droids you're looking for.",
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
