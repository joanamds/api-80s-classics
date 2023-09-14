const chai = require('chai');
const { expect } = chai;
const connection = require('../../../src/models/connection');
const sinon = require('sinon');
const { moviesModel } = require('../../../src/models');
const { allMovies, movie, movieUpdated  } = require('../../mocks/moviesMocks');

describe('Teste de unidade da model de Filmes', function () {
  it('Obtendo a lista de filmes', async function () {
    sinon.stub(connection, 'execute').resolves([allMovies]);

    const result = await moviesModel.findAll();

    expect(result).to.be.deep.equal(allMovies)
  });
  it('Obtendo um filme através do id', async function () {
    sinon.stub(connection, 'execute').resolves([[movie]]);

    const result = await moviesModel.findById(1);

    expect(result).to.be.deep.equal(movie)
  });
  it('Atualizando um filme através do id', async function () {
    sinon.stub(connection, 'execute').resolves([[movieUpdated]]);

    const result = await moviesModel.updateMovieById(2, { name: 'Os Goonies'});

    expect(result).to.be.deep.equal(movieUpdated)
  });
  it('Deletando de acordo com o id', async function () {
    sinon.stub(connection, 'execute').resolves();

    const result = await moviesModel.deleteMovie(3);

    expect(result).to.equal();
  });
  it('Cadastrando um novo filme', async function () {
    sinon.stub(connection, 'execute').resolves([{ insertId:  4}]);

    const result = await moviesModel.insertMovie({ title: "Os Caça-Fantasmas"});

    expect(result).to.equal(4);
  });

  afterEach(function () {
    sinon.restore();
  });
})