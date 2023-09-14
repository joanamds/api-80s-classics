const allMovies = [
  {
    id: 1,
    title: "De Volta Para o Futuro"
  },
  {
    id: 2,
    title: "Top Gun - Ases Indomáveis"
  },
  {
    id: 3,
    title: "Curtindo a Vida Adoidado"
  }
]

const movie = {
  id: 1,
  title: "De Volta Para o Futuro"
}

const movieUpdated = {
  id: 2,
  title: "Os Goonies"
}

const newMovie = {
  id: 4,
  title: "Os Caça-Fantasmas"
}

const serviceError = {
  type: 'MOVIE_NOT_FOUND',
  message: { message: 'Filme não encontrado'}
}

module.exports = {
  allMovies,
  movie,
  movieUpdated,
  newMovie,
  serviceError
}