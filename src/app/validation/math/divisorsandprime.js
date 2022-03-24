const joi = require('joi');


module.exports = async (req, res, next) => {
  try {
    const schema = joi.object({
      number: joi.number().integer().min(0).max(99999999).required(),
    });
    const { error } = await schema.validate(req.body, { abortEarly: false });
    if (error) throw error;
    return next();
  } catch (error) {
    return res.status(400).json(
      error.details.map((detail) => ({
        name: detail.path.join('.'),
        description: detail.message
      }))
    );
  }
};