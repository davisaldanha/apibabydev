const AlunoService = require("../services/AlunoService");

module.exports = {
  readyAlunos: async (req, res) => {
    let json = { error: "", result: [] };

    let alunos = await AlunoService.searchAlunos();

    for (let i in alunos) {
      json.result.push({
        idAluno: alunos[i].idAluno,
        nome: alunos[i].nome,
        sobrenome: alunos[i].sobrenome,
        telefone: alunos[i].telefone,
        email: alunos[i].email,
        idCurso: alunos[i].fk_curso,
      });
    }
    res.json(json);
  },

  readyAlunosByCurso: async (req, res) => {
    let json = { error: "", result: [] };

    let codigo = req.params.codigo;
    let alunos = await AlunoService.getAlunosByCurso(codigo);

    for (let i in alunos) {
      json.result.push({
        idAluno: alunos[i].idAluno,
        nome: alunos[i].nome,
        sobrenome: alunos[i].sobrenome,
        telefone: alunos[i].telefone,
        email: alunos[i].email,
        idCurso: alunos[i].fk_curso,
      });
    }
    res.json(json);
  },

  createAluno: async (req, res) => {
    let json = { error: "", result: {} };

    let nome = req.body.nome;
    let sobrenome = req.body.sobrenome;
    let telefone = req.body.telefone;
    let email = req.body.email;
    let idCurso = req.body.idCurso;

    if (nome && sobrenome && telefone && email && idCurso) {
      let aluno = await AlunoService.createAluno(
        nome,
        sobrenome,
        telefone,
        email,
        idCurso
      );

      json.result = {
        codigo: aluno,
        nome,
        sobrenome,
        telefone,
        email,
        idCurso,
      };
    } else {
      json.error = 'Incomplete Fields!';
    }
    res.json(json);
  },

  updateAluno: async (req, res) => {
    let json = {error:'', result:{}};

    let codigo = req.params.codigo;
    let nome = req.body.nome;
    let sobrenome = req.body.sobrenome;
    let telefone = req.body.telefone;
    let email = req.body.email;
    let idCurso = req.body.idCurso;    

    if (codigo && nome && sobrenome && telefone && email && idCurso){
      await AlunoService.updateAluno(codigo, nome, sobrenome, telefone, email, idCurso);

      json.result = {
        codigo,
        nome,
        sobrenome,
        telefone,
        email,
        idCurso
      };
    }else{
      json.error = 'Incomplete Fields!';
    }
    res.json(json);
  },

  deleteAluno: async (req, res) =>{
    let json = {error:'', result:{}};

    codigo = req.params.codigo;

    await AlunoService.deleteAluno(codigo);

    res.json(json);
  }
};
