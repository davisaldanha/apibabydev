const database = require("../database");

module.exports = {
  getCursoByName: () => {
    return new Promise((accepted, rejected) => {
      database.query("SELECT idCurso, nome FROM curso", (error, results) => {
        if (error) {
          rejected(error);
          return;
        }
        accepted(results);
      });
    });
  },
};
