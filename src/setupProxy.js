const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
  app.use(
    [
      '/api',
      '/auth/google',
      '/auth/facebook',
      '/auth/github',
      '/auth/login',
      'auth/register',
    ],
    createProxyMiddleware({
      target: 'http://localhost:5000',
    })
  );
};
