const Cadastro = require('../models/cadastro-model');

exports.cadastrar_usuario_get = (req, res) => {
  res.render("views/pages/cadastro");
};

exports.cadastrar_usuario_post = (req, res) => {
  let salva_usuario = new Cadastro();

  salva_usuario.nome = req.body.nome;
  salva_usuario.cpf = req.body.cpf;
  salva_usuario.email = req.body.email;
  salva_usuario.senha = req.body.senha;

  salva_usuario.save(err => {
    if(err) {
      return res.status(500).send("Erro ao cadastrar");
    }
    return res.redirect("/biblioteca");
  });
};

