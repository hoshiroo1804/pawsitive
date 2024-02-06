// server.test.js
const request = require('supertest');
const app = require('./server'); // Sesuaikan dengan lokasi server.js

describe('Test endpoint /uploadfile', () => {
  it('should respond with 200 OK', async () => {
    const response = await request(app).post('/uploadfile');
    expect(response.statusCode).toBe(200);
  });
});
