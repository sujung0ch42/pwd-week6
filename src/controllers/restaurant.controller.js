const restaurantService = require('../services/restaurant.service');
const asyncHandler = require('../utils/asyncHandler');
const HttpError = require('../utils/HttpError');

exports.getRestaurants = asyncHandler(async (req, res) => {
  const restaurants = await restaurantService.getAllRestaurants();
  res.json(restaurants);
});

exports.getPopularRestaurants = asyncHandler(async (req, res) => {
  const restaurants = await restaurantService.getPopularRestaurants(5);
  res.json(restaurants);
});

exports.getRestaurantById = asyncHandler(async (req, res) => {
  const restaurant = await restaurantService.getRestaurantById(req.params.id);
  if (!restaurant) {
    throw new HttpError(404, 'Restaurant not found');
  }
  res.json(restaurant);
});
