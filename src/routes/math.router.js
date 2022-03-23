const mathController = require('../app/controller/MathController');

module.exports = (server, routes, prefix = '/v1/math') => {
  routes.post('/', mathController.divisorsandprime);
  server.use(prefix, routes);
}