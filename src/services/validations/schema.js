const Joi = require('joi');

const addMovieSchema = Joi.object({
  title: Joi.string().min(2).required(),
});

module.exports = {
  addMovieSchema,
};