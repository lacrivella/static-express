const request = require('supertest');
const app = require('../lib/app');

describe('app aroute', () => {
  it('has color route', () => {
    return request(app)
      .get('/api/v1/colors')
      .then(res => {
        expect(res.body).toEqual([
          { name: 'cerulean', hex: '007BA7', r: '0', g: '123', b:'167' },
          { name: 'vermilion', hex: 'E34234', r: '227', g: '66', b:'52' },
          { name: 'viridian', hex: '40826D', r: '60', g: '130', b:'109' },
          { name: 'lavender', hex: 'E6E6FA', r: '230', g: '230', b:'250' },
        ]);
      });
  });
  it('creates data on color link', () => {
    return request(app)
      .get(`/colors.html?=lavender`)
      .then(res => {
        expect(res.text).toEqual(expect.stringContaining('Color'));
      });
  });
});
