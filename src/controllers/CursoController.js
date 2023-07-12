const CursoService = require("../services/CursoService");

module.exports = {
    getCursos: async (req, res) => {
        let json = {error:'', result:[]};

        let cursos = await CursoService.getCursoByName();

        for(let i in cursos){
            json.result.push({
                codigo: cursos[i].idCurso,
                nome: cursos[i].nome
            });
        }
        res.header("Access-Control-Allow-Origin", "*");
        res.json(json);
    }
}