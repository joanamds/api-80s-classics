const { moviesModel } = require('../models');
const schema = require('./validations/validationsInput');

const getAllMovies = async () => {
  const movies = await moviesModel.findAll();
  return { type: null, message: movies}
}

const getMovieById = async (movieId) => {
  const movie = await moviesModel.findById(movieId)
  if(!movie) {
    return { type: 'MOVIE_NOT_FOUND', message: { message: 'Filme não encontrado' }}
  }

  return { type: null, message: movie}
}

const createMovie = async (title) => {
  const error = schema.validateNewMovie(title);
  if (error.type) return error;

  const id = await productModel.insertProduct(title);

  return { type: null, message: { id, title } };
};

module.exports = {
  getAllMovies,
  getMovieById,
  createMovie
}