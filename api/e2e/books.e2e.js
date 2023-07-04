// =========== INTEGRATION TEST
const request = require('supertest');
const { MongoClient } = require('mongodb');
const { config } = require('../src/config');
const createApp = require('../src/app');

const DB_NAME = config.dbName;
const MONGO_URI = config.dbUrl;
describe('Test for Books', () => {
  let app = null;
  let server = null;
  let dataBase = null;
  beforeAll(async () => {
    app = createApp();
    server = app.listen(3002);
    const client = new MongoClient(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await client.connect();
    dataBase = client.db(DB_NAME);
  });

  afterAll(async () => {
    await server.close();
    await dataBase.collection('books').drop();
  });

  describe('Test for [GET] /api/v1/books', () => {
    test('Should return a likst of Books', async () => {
      const seedData = await dataBase.collection('books').insert([
        {
          name: 'Book1',
          year: 1995,
          author: 'Laura F.',
        },
        {
          name: 'Book2',
          year: 1986,
          author: 'Laura F.',
        }]);
      console.log(seedData);
      return request(app)
        .get('/api/v1/books')
        .expect(200)
        .then(({ body }) => {
          console.log(body);
          // Assert
          expect(body.length).toEqual(seedData.insertedCount);
        });
    });
  });
});
