const restaurants = require('../data/restaurants.json');

async function findAll() {
  return restaurants.map((r) => ({ ...r, recommendedMenu: [...r.recommendedMenu] }));
}

module.exports = { findAll };
