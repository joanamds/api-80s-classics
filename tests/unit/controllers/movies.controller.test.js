const chai = require('chai');
const { expect } = chai;
const sinon = require('sinon');
const { moviesService } = require('../../../src/services');
const { moviesController } = require('../../../src/controllers');

const { allMovies, movie, movieUpdated, newMovie } = require('../../mocks/moviesMocks');

describe('Teste de unidade do controller de filmes', function () {
  it('Deve retornar a lista de filmes', async function() {
    const req = {};
    const res = {};
    
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(moviesService, 'getAllMovies')
    .resolves({ type: null, message: allMovies});

    await moviesController.listMovies(req, res);

    expect(res.status.calledWith(200)).to.be.equals(true);
    expect(res.json.calledWith(allMovies)).to.be.equals(true);
  });
  it('Deve retornar o filme de acordo com o id', async function () {
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.spy(),
    };
    const req = {
      params: { id: 1 },
    };

    sinon.stub(moviesService, 'getMovieById')
      .resolves({ type: null, message: {...movie} });

    await moviesController.getMovieById(req, res);

    expect(res.status.calledWith(200)).to.be.equals(true);
    expect(res.json.calledWith(movie)).to.be.equals(true);
  });
  it('Deve criar um novo filme', async function () {
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.spy(),
    };

    const req = {
      body: { title: 'Os Caça-Fantasmas' }
    };

    sinon.stub(moviesService, 'createMovie')
      .resolves({ type: null, message: { ...newMovie } });

    await moviesController.createMovie(req, res);

    expect(res.status.calledWith(201)).to.be.equals(true);
    expect(res.json.calledWith(newMovie)).to.be.equals(true);
  });
  afterEach(function () {
    sinon.restore();
  });
  it('Deve retornar erro caso não tenha title', async function () {
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.spy(),
    };

    const req = {
      body: { title: '' }
    };

    sinon.stub(moviesService, 'createMovie')
      .resolves({ type: 'BAD_REQUEST', message: { message: 'É necessário inserir um "title"'} });

    await moviesController.createMovie(req, res);

    expect(res.status.calledWith(400)).to.be.equals(true);
    expect(res.json.calledWith({ message: 'É necessário inserir um "title"'})).to.be.equals(true);
  });

  it('Deve retornar erro caso o title não tenha 2 caracteres ou mais', async function () {
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.spy(),
    };

    const req = {
      body: { title: 'G' }
    };

    sinon.stub(moviesService, 'createMovie')
      .resolves({
        type: 'INVALID_VALUE', message: { message: 'O "title" deve ter pelo menos 2 caracteres'} });

    await moviesController.createMovie(req, res);

    expect(res.status.calledWith(422)).to.be.equals(true);
    expect(res.json.calledWith({ message: 'O "title" deve ter pelo menos 2 caracteres'})).to.be.equals(true);
  });

  it('Deve atualizar o filme com sucesso', async function () {
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.spy(),
    };

    const req = {
      params: { id: 2 },
      body: { title: 'Os Goonies' }
    };

    sinon.stub(moviesService, 'updateById')
      .resolves({
        type: null, message: [movieUpdated]
      });

    await moviesController.updateById(req, res);

    expect(res.status.calledWith(200)).to.be.equals(true);
    expect(res.json.calledWith(movieUpdated)).to.be.equals(true);
  });

  it('Deve deletar o filme com sucesso', async function () {
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.spy(),
    };

    const req = {
      params: { id: 3 },
    };

    sinon.stub(moviesService, 'deleteMovieById')
      .resolves({
        type: null, message: ''
      });

    await moviesController.deleteMovieById(req, res);

    expect(res.status.calledWith(204)).to.be.equals(true);
    expect(res.json.calledWith()).to.be.equals(true);
  });
})

