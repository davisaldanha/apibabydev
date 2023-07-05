const database = require("../database");

module.exports = {
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
};
