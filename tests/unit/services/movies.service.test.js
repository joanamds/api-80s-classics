const chai = require('chai');
const { expect } = chai;
const sinon = require('sinon');
const { moviesModel } = require('../../../src/models');
const { moviesService } = require('../../../src/services');
const  {
  allMovies,
  movie,
  movieUpdated,
  newMovie,
} = require('../../mocks/moviesMocks')

describe('Teste de unidade do service de Filmes', function () {
  it('Testa se retorna todos os filmes', async function () {
    sinon.stub(moviesModel, 'findAll').resolves(allMovies);

    const result = await moviesService.getAllMovies();

    expect(result.type).to.be.null;
    expect(result.message).to.deep.equal(allMovies);
  });
  describe('Verifica o retorno de um filme de acordo com o id', function () {
    it('Deve retornar um filme com o id válido', async function () {
      sinon.stub(moviesModel, 'findById').resolves([[movie]]);

      const result = await moviesService.getMovieById(1);

      expect(result.type).to.be.null;
      expect(result.message).to.deep.equal([[movie]]);
    })
    it('Deve retornar erro para um filme com o id inválido', async function () {
      sinon.stub(moviesModel, 'findById').resolves(null);

      const result = await moviesService.getMovieById(5);

      expect(result.type).to.equal('MOVIE_NOT_FOUND');
      expect(result.message).to.deep.equal({ message: 'Filme não encontrado'});
    })
  })
  describe('Verifica se é possível deletar um filme', function () {
    it('Testa que não é possível deletar um filme com id inválido', async function () {
      sinon.stub(moviesModel, 'deleteMovie').rejects(new Error);
  
      const result = await moviesService.deleteMovieById(45);
  
      expect(result.type).to.equal('MOVIE_NOT_FOUND');
      expect(result.message).to.deep.equal({ message: 'Filme não encontrado'});
    });
    it('Testa que é possível deletar um filme com id válido', async function () {
      sinon.stub(moviesModel, 'deleteMovie').resolves();
  
      const result = await moviesService.deleteMovieById(3);
  
      expect(result.type).to.be.null;
      expect(result.message).to.deep.equal();
    });
  });
  describe('Verifica se é possível atualizar um filme', function () {
    it('Verifica se atualiza o filme com sucesso', async function () {
      sinon.stub(moviesModel, 'updateMovieById').resolves(movieUpdated);
  
      const result = await moviesService.updateById(2, { title: "Os Goonies"});
  
      expect(result.type).to.equal('MOVIE_NOT_FOUND');
      expect(result.message).to.deep.equal();
    });
    it('Verifica se não atualiza o filme com id inválido', async function () {
      sinon.stub(moviesModel, 'updateMovieById').resolves(movieUpdated);
  
      const result = await moviesService.updateById(5, { title: "Os Goonies"});
  
      expect(result.type).to.be.null;
      expect(result.message).to.deep.equal({ message: 'Filme não encontrado'});
    });
  })
  describe('Verifica se é possível criar um filme', function() {
    it('Deve retornar a criação do filme', async function () {
      sinon.stub(moviesModel, 'insertMovie').resolves(4)

      const result = await moviesService.createMovie('Os Caça-Fantasmas');

      expect(result.type).to.be.null;
      expect(result.message).to.deep.equal(newMovie);
    });
    it('Deve retornar erro caso não venha um título', async function () {
      sinon.stub(moviesModel, 'insertMovie').rejects(new Error)

      const result = await moviesService.createMovie();

      expect(result.type).to.equal('BAD_REQUEST');
      expect(result.message).to.deep.equal({ message: 'É necessário inserir um "title"'});
    })
    it('Deve retornar erro caso não tenha pelo menos 2 caracteres', async function () {
      sinon.stub(moviesModel, 'insertMovie').rejects(new Error)

      const result = await moviesService.createMovie('r');

      expect(result.type).to.equal('INVALID_VALUE');
      expect(result.message).to.deep.equal({ message: 'O "title" deve ter pelo menos 2 caracteres'})
    })
  })
  afterEach(function () {
    sinon.restore();
  });
})