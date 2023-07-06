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

  updateAluno: (codigo, nome, sobrenome, telefone, email, idCurso) => {
    return new Promise((accepted, rejected) => {
      database.query(
        `UPDATE aluno SET nome = '${nome}', sobrenome = '${sobrenome}', telefone = '${telefone}', email = '${email}', fk_curso = ${idCurso} WHERE idAluno = ${codigo}`,
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
  }
};
