const express = require('express');

const { moviesController } = require('../controllers');

const route = express.Router();

route.get('/', moviesController.listMovies);
route.get('/:id', moviesController.getMovieById);
route.post('/', moviesController.createMovie);
route.put('/:id', moviesController.updateById);
route.delete('/:id', moviesController.deleteMovieById)

module.exports = route;