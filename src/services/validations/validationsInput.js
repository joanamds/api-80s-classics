const { addMovieSchema } = require('./schema');

const validateNewMovie = (title) => {
  const { error } = addMovieSchema.validate({ title });

  if (!title) return { type: 'BAD_REQUEST', message: { message: 'É necessário inserir um "title"'} };
  if (error) {
  return (
    { type: 'INVALID_VALUE',
    message: { message: 'O "title" deve ter pelo menos 2 caracteres'} }
  ); 
  }
  
  return { type: null, message: '' };
};

module.exports = {
  validateNewMovie
}