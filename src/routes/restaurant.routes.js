const express = require('express');
const controller = require('../controllers/restaurant.controller');

const router = express.Router();

router.get('/', controller.getRestaurants);
router.get('/popular', controller.getPopularRestaurants);
router.get('/:id', controller.getRestaurantById);

module.exports = router;
