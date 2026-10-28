const request = require('supertest');
const app = require('../src/app');

describe('GET /api/restaurants', () => {
  it('맛집 배열을 반환한다', async () => {
    const res = await request(app).get('/api/restaurants');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body).toHaveLength(3);
    expect(res.body[0]).toHaveProperty('name', '송림식당');
  });
});

describe('GET /api/restaurants/popular', () => {
  it('평점 높은 순으로 최대 5개를 반환한다', async () => {
    const res = await request(app).get('/api/restaurants/popular');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeLessThanOrEqual(5);
    const ratings = res.body.map((r) => r.rating);
    expect(ratings).toEqual([...ratings].sort((a, b) => b - a));
  });
});

describe('GET /api/restaurants/:id', () => {
  it('맛집 1개 객체를 반환한다', async () => {
    const res = await request(app).get('/api/restaurants/2');
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('id', 2);
    expect(res.body).toHaveProperty('name', '별미떡볶이');
  });

  it('없는 id면 404 JSON 에러를 반환한다', async () => {
    const res = await request(app).get('/api/restaurants/999');
    expect(res.status).toBe(404);
    expect(res.headers['content-type']).toMatch(/json/);
    expect(res.body.error).toHaveProperty('status', 404);
  });
});

describe('없는 주소', () => {
  it('404 JSON 에러를 반환한다', async () => {
    const res = await request(app).get('/api/unknown');
    expect(res.status).toBe(404);
    expect(res.headers['content-type']).toMatch(/json/);
    expect(res.body.error).toHaveProperty('status', 404);
  });
});
