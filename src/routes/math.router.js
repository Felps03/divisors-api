const validationDivisorsAndPrime = require('../app/validation/math/divisorsandprime');
const mathController = require('../app/controller/MathController');

module.exports = (server, routes, prefix = '/v1/math') => {
  routes.post('/', validationDivisorsAndPrime, mathController.divisorsandprime);
  server.use(prefix, routes);
};
