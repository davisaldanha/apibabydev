const database = require("../database");

module.exports = {
  //Método para pesquisar todos os alunos
  searchAlunos: () => {
    return new Promise((accepted, rejected) => {
      database.query("SELECT * FROM aluno", (error, results) => {
        if (error) {
          rejected(error);
          return;
        }
        accepted(results);
      });
    });
  },

  //Método para pesquisar os aluno por curso
  getAlunosByCurso: (codigo) => {
    return new Promise((accepted, rejected) => {
      database.query(
        `SELECT * FROM aluno WHERE fk_curso = ${codigo}`,
        (error, results) => {
          if (error) {
            rejected(error);
            return;
          }
          accepted(results);
        }
      );
    });
  },

  //Método para consultar o id do curso que o aluno faz parte
  getCursoByIdAluno:(codigo) => {
    return new Promise((accepted, rejected) => {
      database.query(
        `SELECT fk_curso FROM aluno WHERE idAluno = ${codigo}`,
        (error, results) => {
          if (error) {
            rejected(error);
            return;
          }
          accepted(results);
        }
      );
    });
  },

  //Método para cadastrar um aluno 
  createAluno: (nome, sobrenome, telefone, email, idCurso) => {
    return new Promise((accepted, rejected) => {
      database.query(
        `INSERT INTO aluno(nome, sobrenome, telefone, email, fk_curso) VALUES
            ('${nome}', '${sobrenome}', '${telefone}', '${email}',${idCurso})`,
        (error, results) => {
          if (error) {
            rejected(error);
            return;
          }
          accepted(results);
        }
      );
    });
  },

  //Método para atualizar as informações do aluno
  updateAluno: (codigo, nome, sobrenome, telefone, email) => {
    return new Promise((accepted, rejected) => {
      database.query(
        `UPDATE aluno SET nome = '${nome}', sobrenome = '${sobrenome}', telefone = '${telefone}', email = '${email}' WHERE idAluno = ${codigo}`,
        (error, results) => {
          if (error) {
            rejected(error);
            return;
          }
          accepted(results);
        }
      );
    });
  },

  //Método para excluir um aluno
  deleteAluno: (codigo) => {
    return new Promise((accepted, rejected) => {
      database.query(`DELETE FROM aluno WHERE idAluno = ${codigo}`, (error, results) => {
        if (error) {
          rejected(error);
          return;
        }
        accepted(results);
      });
    });
  },

  //Método para retirar um vaga disponível do curso
  DelVagas: (codigo) => {
    return new Promise((accepted, rejected) => {
      database.query(
        `UPDATE curso SET quantidade = quantidade - 1 WHERE idCurso = ${codigo}`, (error,results) => {
          if (error) {
            rejected(error);
            return;
          }
          accepted(results);         
        });
    });
  },

  //Método para acrescentar uma vaga disponível no curso
  AddVagas: (codigo) => {
    return new Promise((accepted, rejected) => {
      database.query(
        `UPDATE curso SET quantidade = quantidade + 1 WHERE idCurso = ${codigo}`, (error,results) => {
          if (error) {
            rejected(error);
            return;
          }
          accepted(results);         
        });
    });
  },

  //Método para retornar o total de vagas em um curso
  returnVagas: (codigo) => {
    return new Promise((accepted,rejected) => {
      database.query(`SELECT quantidade FROM curso WHERE idCurso = ${codigo}`, (error, results) => {
        if (error) {
          rejected(error);
          return;
        }
        accepted(results);
      });
    });
  }

};
