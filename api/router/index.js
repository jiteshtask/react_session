var secureRouter = require('./secureRouter');

module.exports = function(app) {
  app.use('/api', secureRouter);
};
