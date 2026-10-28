// eslint-disable-next-line no-unused-vars
module.exports = (err, req, res, next) => {
  const status = err.status || 500;
  res.status(status).json({
    error: {
      status,
      message: status === 500 ? 'Internal Server Error' : err.message,
    },
  });
};
