const express = require('express');

const app = express();

const v1Router = require('./routes/v1Routes');
const v2Router = require('./routes/v2Routes');

app.use('/api/v1/service-centers', v1Router);
app.use('/api/v2/service-centers', v2Router);

app.get('*', (_, res) => {
  res.status(200).send("These aren't the droids you're looking for.");
});

module.exports = app;
