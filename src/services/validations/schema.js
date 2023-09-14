const Joi = require('joi');

const addMovieSchema = Joi.object({
  name: Joi.string().min(2).required(),
});

module.exports = {
  addMovieSchema,
};