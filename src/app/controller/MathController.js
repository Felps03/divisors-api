const { divisorsAndPrime } = require('../service/MathService');

class MathController {
  async divisorsandprime(req, res) {
    const { number } = req.body;
    const result = divisorsAndPrime(number);
    return res.status(200).json(result);
  }
}

module.exports = new MathController();
