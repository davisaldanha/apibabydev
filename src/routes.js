const express = require('express');
const Router = express.Router();
const AlunoController = require('./controllers/AlunoController');
const { urlencoded } = require('body-parser');
const cors = require('cors');
const CursoService = require('./services/CursoService');
const CursoController = require('./controllers/CursoController');

Router.options('*', cors())

Router.get('/alunos', AlunoController.readyAlunos);
Router.get('/alunos/:codigo', AlunoController.readyAlunosByCurso);
Router.post('/aluno', AlunoController.createAluno);
Router.put('/aluno/:codigo', AlunoController.updateAluno);
Router.delete('/aluno/:codigo', AlunoController.deleteAluno);
Router.get('/cursos', CursoController.getCursos);

module.exports = Router;