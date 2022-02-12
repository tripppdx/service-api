const fs = require('fs');
const mongoose = require('mongoose');
require('dotenv').config();

const Service = require('../../models/serviceModel');

const DB = process.env.DATABASE.replace(
  '<password>',
  process.env.DATABASE_PASSWORD
);

mongoose.connect(DB).then(() => {
  console.log('DB connection successful!');
});

const facilities = JSON.parse(
  fs.readFileSync(`${__dirname}/avalon.json`, 'utf-8')
);

const importData = async () => {
  try {
    await Service.create(facilities);
    console.log('Data successfully loaded!');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

const deleteData = async () => {
  try {
    await Service.deleteMany();
    console.log('Data successfully deleted!');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deleteData();
}
