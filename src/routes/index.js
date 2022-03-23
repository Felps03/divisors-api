const { Router } = require('express');
const math = require('../routes/math.router')

module.exports = server => {
  server.use((req, res, next) => {
    math(server, new Router());
    next();
  });
}