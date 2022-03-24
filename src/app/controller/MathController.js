const { divisorsAndPrime } = require('../service/MathService');

class MathController {
  async divisorsandprime(req, res) {
    const { number } = req.body;
    const result = divisorsAndPrime(number);
    if (!result) return res.status(204).send();
    return res.status(200).json(result);
  }
}

module.exports = new MathController();
