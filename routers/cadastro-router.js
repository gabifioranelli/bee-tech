const express = require("express");
const router = express.Router();

const cadastroController = require("../controllers/cadastro-controller");

router.get("/cadastrarUsuario", cadastroController.cadastrar_usuario_get);

router.post("/cadastrarUsuario", cadastroController.cadastrar_usuario_post);

module.exports = router;