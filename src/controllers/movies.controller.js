const { moviesService } = require('../services');
const errorMap = require('../utils/errorMap');

const listMovies = async (_req, res) => {
  const { type, message } = await moviesService.getAllMovies();
  if(type) return res.status(errorMap.mapError(type)).json(message);

  return res.status(200).json(message)
}

const getMovieById = async (req, res) => {
  const { id } = req.params
  const { type, message } = await moviesService.getMovieById(id);
  if (type) return res.status(errorMap.mapError(type)).json(message);

  return res.status(200).json(message);
}

const createMovie = async (req, res) => {
  const { title } = req.body;
  const { type, message } = await moviesService.createMovie(title);
  if(type) return res.status(errorMap.mapError(type)).json(message);

  return res.status(201).json(message);
}

const updateById = async (req, res) => {
  const { id } = req.params;
  const movie = req.body;
  const { type, message } = await moviesService.updateById(id, movie);
  if(type) return res.status(errorMap.mapError(type)).json(message);

  return res.status(200).json(message[0]);
}

const deleteMovieById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await moviesService.deleteMovieById(id);
  if(type) return res.status(errorMap.mapError(type)).json(message);

  return res.status(204).json();
}
module.exports = {
  listMovies,
  getMovieById,
  createMovie,
  updateById,
  deleteMovieById
}