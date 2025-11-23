// Logging middleware with mimal functionality


// Module to log HTTP method and URL of each request and then print to console ie method and URL
module.exports = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};