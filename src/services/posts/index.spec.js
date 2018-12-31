import request from 'supertest';
import { app } from '../../server';

describe('Integration test services Posts', () => {
  describe('Method POST', () => {
    test('Should create a new post', async () => {
      const response = await request(app)
        .post('/posts')
        .send({ userId: 5 })
        .set('user_id', 1)
        .set('Content-Type', 'application/json');
      expect(response.statusCode).toEqual(201);
      expect(response.body.userId).toEqual(5);
      expect(response.body).toHaveProperty('id');
    }, 5000);

    test('Does not create a new post', async () => {
      const response = await request(app)
        .post('/posts')
        .send({ userId: 15 })
        .set('user_id', 1)
        .set('Content-Type', 'application/json');
      expect(response.statusCode).toEqual(400);
    }, 5000);
  });
});
