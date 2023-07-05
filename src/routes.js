const express = require('express');
const Router = express.Router();
const AlunoController = require('./controllers/AlunoController');
const { urlencoded } = require('body-parser');

Router.get('/alunos', AlunoController.readyAlunos);
Router.get('/alunos/:codigo', AlunoController.readyAlunosByCurso);
Router.post('/aluno', AlunoController.createAluno);

module.exports = Router;