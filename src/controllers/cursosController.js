const cursos = require('../models/cursos');

const getAll = (req, res) => {
  console.log(req.url);
  cursos.find(function(err, cursos){
    if(err) { 
      res.status(500).send({ message: err.message })
    }
    res.status(200).send(cursos);
  })
};

const getById = (req, res) => {
  const id = req.params.id;
  //Find sempre retorna uma lista
  //FindOne retorna um unico documento
  cursos.find({ id }, function(err, cursos){
    if(err) { 
      res.status(500).send({ message: err.message })
    }

    res.status(200).send(cursos);
  })
};

const postCurso = (req, res) => {
  console.log(req.body)
  
  let curso = new cursos(req.body)

  curso.save(function(err){
    if(err) { 
      res.status(500).send({ message: err.message })
    }
    res.status(201).send(curso.toJSON())
  })
  
};

const deleteCurso = (req, res) => {
  const id = req.params.id;

  //deleteMany remove mais de um registro
  //deleteOne remove apenas um registro
  cursos.find({ id }, function(err, curso){
    if(curso.length > 0){
      cursos.deleteMany({ id }, function(err){
        if(err) { 
          res.status(500).send({ 
            message: err.message, 
            status: "FAIL" 
           })
        }
        res.status(200).send({ 
          message: 'Curso removida com sucesso', 
          status: "SUCCESS" 
        })
      })
    }else{
      res.status(200).send({ 
        message: 'Não tem curso para ser removido', 
        status: "EMPTY" 
      })
    }
  })
};

//const deleteCursosInativos = (req, res) => {
  //Deleta quando estiver status = inativo

const putCursos = (req, res) => {
  const id = req.params.id;

  cursos.find({ id }, function(err, curso){
    if(curso.length> 0){
      //faz o update apenas para quem respeitar o id passado no parametro
      // set são os valores que serão atualizados
      //UpdateMany atualiza vários registros de uma unica vez
      //UpdateOne atualiza um único registro por vez
      
      cursos.updateMany({ id }, { $set : req.body }, function (err) {
        if (err) {
          res.status(500).send({ message: err.message })
        }
        res.status(200).send({ message: "Registro alterado com sucesso"})
      })
    }else {
      res.status(200).send({ message: "Não há registros para serem atualizados com esse id"})
    }
  })

}

module.exports = {
  getAll,
  getById,
  postCurso,
  deleteCurso,
  putCursos
};