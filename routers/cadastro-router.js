const express = require("express");
const router = express.Router();

const cadastroController = require("../controllers/cadastro-controller");

router.get("/home", cadastroController.listar_usuario);

router.get("/cadastro", cadastroController.cadastrar_usuario_get);

router.post("/cadastro", cadastroController.cadastrar_usuario_post);

module.exports = router;