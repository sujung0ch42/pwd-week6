const express = require('express');
const cors = require('cors');
const restaurantRoutes = require('./routes/restaurant.routes');
const notFound = require('./middleware/notFound');
const errorHandler = require('./middleware/errorHandler');

const app = express();

app.use(cors({
  origin: ['https://pwd-week5-bice.vercel.app', 'http://localhost:5173'],
}));
app.use(express.json());

app.use('/api/restaurants', restaurantRoutes);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
