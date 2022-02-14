require('dotenv').config();
const mongoose = require('mongoose');

const request = require('supertest');
const app = require('../app');
const agent = request.agent(app);

const DB = process.env.DATABASE.replace(
  '<password>',
  process.env.DATABASE_PASSWORD
);

beforeAll(async () => {
  await mongoose.connect(DB);
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe('V2 Route Test', () => {
  test('Can get all service centers', async () => {
    let response = await agent.get('/api/v2/service-centers');
    console.log(response.body.data);
    expect(response.body.data.facilities[0].facilityName).toBe(
      'Toyota of Avalon'
    );
  });
});
