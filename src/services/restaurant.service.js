const Restaurant = require('../models/restaurant.model');

async function getAllRestaurants() {
  return Restaurant.findAll();
}

async function getPopularRestaurants(limit = 5) {
  const restaurants = await Restaurant.findAll();
  return [...restaurants].sort((a, b) => b.rating - a.rating).slice(0, limit);
}

async function getRestaurantById(id) {
  const restaurants = await Restaurant.findAll();
  return restaurants.find((r) => r.id === Number(id)) || null;
}

module.exports = { getAllRestaurants, getPopularRestaurants, getRestaurantById };
