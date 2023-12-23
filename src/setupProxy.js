// In your React app, create a setupProxy.js file in the src folder

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/demande/demandeDoc', // Adjust the path to match your API structure
    createProxyMiddleware({
      target: 'http://localhost:8080',
      changeOrigin: true,
    })
  );
}