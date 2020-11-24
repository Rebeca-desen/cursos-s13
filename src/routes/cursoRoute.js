const express = require("express");
const router = express.Router();
const controller = require("../controllers/cursosController");

router.get("/", controller.getAll);
//router.get("/cursos", controller.getAll);
router.get("/:id", controller.getById);
router.post("/", controller.postCurso);
router.delete("/:id", controller.deleteCurso);
router.put("/:id", controller.putCursos);

module.exports = router;
