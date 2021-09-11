const Usuario = require("../models/cadastro-model");

exports.listar_usuario = (req, res) => {
  Usuario.find({}, (err, usuario) => {
    if(err) {
      return res.status(500).send("erro ao consultar");
    }
    res.render("views/pages/home", { listar_usuario: usuario });
  });
};

exports.cadastrar_usuario_get = (req, res) => {
  res.render("views/pages/cadastro");
};

exports.cadastrar_usuario_post = (req, res) => {
  let salvar_usuario = new Usuario();

  salvar_usuario.nome = req.body.nome;
  salvar_usuario.cpf = req.body.cpf;
  salvar_usuario.email = req.body.email;
  salvar_usuario.senha = req.body.senha;

  salvar_usuario.save(err => {
    if(err) {
      return res.status(500).send("Erro ao cadastrar");
    }
    return res.redirect("/");
  });
};