const request = require('supertest');
const app = require('../../../src/app');

describe('API :: POST :: /v1/math', () => {
  describe('Given that you enter a string 45', () => {
    describe('When I ask to divisors and prime', () => {
      let response = '';

      beforeEach(async () => {
        response = await request(app).post('/v1/math').send({
          number: '45'
        });
      });

      it('Then I should have dividor = [1, 3, 5, 9, 15, 45]', () => {
        expect(response.body.divisors).toStrictEqual([1, 3, 5, 9, 15, 45]);
      });

      it('And I should have prime = [3, 5]', () => {
        expect(response.body.primes).toStrictEqual([3, 5]);
      });

      it('Then I should have status 200', () => {
        expect(response.status).toBe(200);
      });

    });
  });

  describe('Given that you enter a number 45', () => {
    describe('When I ask to divisors and prime', () => {
      let response = '';

      beforeEach(async () => {
        response = await request(app).post('/v1/math').send({
          number: 45
        });
      });

      it('Then I should have dividor = [1, 3, 5, 9, 15, 45]', () => {
        expect(response.body.divisors).toStrictEqual([1, 3, 5, 9, 15, 45]);
      });

      it('And I should have prime = [3, 5]', () => {
        expect(response.body.primes).toStrictEqual([3, 5]);
      });

      it('Then I should have status 200', () => {
        expect(response.status).toBe(200);
      });
    });
  });

  describe('Given that you enter a number 7', () => {
    describe('When I ask to divisors and prime', () => {
      let response = '';

      beforeEach(async () => {
        response = await request(app).post('/v1/math').send({
          number: 7
        });
      });

      it('Then I should have dividor = [1, 7]', () => {
        expect(response.body.divisors).toStrictEqual([1, 7]);
      });

      it('And I should have prime = [7]', () => {
        expect(response.body.primes).toStrictEqual([7]);
      });
    });
  });

  describe('Given that you enter a number 7a', () => {
    describe('When I ask to divisors and prime', () => {
      let response = '';

      beforeEach(async () => {
        response = await request(app).post('/v1/math').send({
          number: '7a'
        });
      });

      it('Then I should have error in the body', () => {
        expect(response.body).toStrictEqual([
          {
            name: 'number',
            description: '"number" must be a number'
          }
        ]);
      });

      it('Then I should have status 400', () => {
        expect(response.status).toBe(400);
      });

    });
  });

  describe('Given that you enter a number -1', () => {
    describe('When I ask to divisors and prime', () => {
      let response = '';

      beforeEach(async () => {
        response = await request(app).post('/v1/math').send({
          number: '-1'
        });
      });

      it('Then I should have error in the body', () => {
        expect(response.body).toStrictEqual([
          {
            name: 'number',
            description: '"number" must be greater than or equal to 0'
          }
        ]);
      });

      it('Then I should have status 400', () => {
        expect(response.status).toBe(400);
      });

    });
  });

  describe('Given that you enter a number 100000000', () => {
    describe('When I ask to divisors and prime', () => {
      let response = '';

      beforeEach(async () => {
        response = await request(app).post('/v1/math').send({
          number: 100000000
        });
      });

      it('Then I should have error in the body', () => {
        expect(response.body).toStrictEqual([
          {
            name: 'number',
            description: '"number" must be less than or equal to 99999999'
          }
        ]);
      });

      it('Then I should have status 400', () => {
        expect(response.status).toBe(400);
      });

    });
  });

  describe('Given that you enter a string 104729', () => {
    describe('When I ask to divisors and prime', () => {
      let response = '';

      beforeEach(async () => {
        response = await request(app).post('/v1/math').send({
          number: '104729'
        });
      });

      it('Then I should have dividor = [1, 104729]', () => {
        expect(response.body.divisors).toStrictEqual([1, 104729]);
      });

      it('And I should have prime = [104729]', () => {
        expect(response.body.primes).toStrictEqual([104729]);
      });

      it('Then I should have status 200', () => {
        expect(response.status).toBe(200);
      });

    });
  });

  describe('Given that you enter a string 0', () => {
    describe('When I ask to divisors and prime', () => {
      let response = '';

      beforeEach(async () => {
        response = await request(app).post('/v1/math').send({
          number: '0'
        });
      });

      it('Then I should have status 204', () => {
        expect(response.status).toBe(204);
      });
    });
  });
});
