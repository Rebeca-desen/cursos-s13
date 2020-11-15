const mongoose = require('mongoose')
const Schema = mongoose.Schema
const cursosSchema = new Schema ({
    id : { type : Number },
    descrição : { type: String },
    quantidadeAlunas : { type : String },
    status : { type : String },
    disciplina : { type : String }
},{ 
    versionKey: false
})