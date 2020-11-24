const mongoose = require('mongoose')
//const Schema = mongoose.Schema
const cursosSchema = new mongoose.Schema ({
    id : { type : String },
    descricao : { type: String },
    quantidadeAlunas : { type : String },
    status : { type : String },
    disciplina : { type : String }
},{ 
    versionKey: false
})

const cursos = mongoose.model('collectionCurso', cursosSchema)

module.exports = cursos