const connection = require('./connection');

const findAll = async () => {
  const [result] = await connection.execute(
    'SELECT * from 80sClassics.movies',
  );

  return result
}

const findById = async (movieId) => {
  const [[result]] = await connection.execute(
    'SELECT * FROM 80sClassics.movies WHERE id = ?',
    [movieId]
  );

  return result
}

const updateMovieById = async (movieId, { title }) => {
  await connection.execute(
    'UPDATE 80sClassics.movies SET title = ? WHERE id = ?',
    [title, movieId]
  )
  
  const result = await findById(movieId)
  return result
}

const deleteMovie = async (movieId) => {
  await connection.execute(
    'DELETE FROM 80sClassics.movies WHERE id = ?',
    [movieId]
  );
}

const insertMovie = async (movieTitle) => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO 80sClassics.movies (title) VALUES (?)',
    [movieTitle]
  )

  return insertId
}

module.exports = {
  findAll,
  findById,
  updateMovieById,
  deleteMovie,
  insertMovie
}