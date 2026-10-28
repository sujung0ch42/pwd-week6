const HttpError = require('../utils/HttpError');

module.exports = (req, res, next) => {
  next(new HttpError(404, `Not found: ${req.method} ${req.originalUrl}`));
};
