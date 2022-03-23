const { divisorsAndPrime } = require('../service/MathService');

class MathController {
  async divisorsandprime(req, res) {
    const result = divisorsAndPrime(req.body);
    return res.status(200).json(result);
  }
}

module.exports = new MathController();
