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

  const id = await moviesModel.insertMovie(title);

  return { type: null, message: { id, title } };
};

const deleteMovieById = async (id) => {
  const movie = await moviesModel.findById(id)
  if(!movie) {
    return { type: 'MOVIE_NOT_FOUND', message: { message: 'Filme não encontrado' }}
  }
  const deleted = await moviesModel.deleteMovie(id)
  return { type: null, message: deleted }
}

const updateById = async (id, movie) => {
  const error = schema.validateNewMovie(movie.title);
  if (error.type) return error;

  const findMovie = await moviesModel.findById(id);

  if (!findMovie) {
  return {
    type: 'MOVIE_NOT_FOUND', message: { message: 'Filme não encontrado' },
  }; 
}

  const newMovie = await moviesModel.updateMovieById(id, movie);
  return { type: null, message: newMovie };
};

module.exports = {
  getAllMovies,
  getMovieById,
  createMovie,
  deleteMovieById,
  updateById
}