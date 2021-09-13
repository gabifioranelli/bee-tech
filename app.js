const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.set('view engine', 'ejs');
app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://gabi_fioranelli:inuyasha-91@cluster0.sshaw.mongodb.net/usuario?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true });

const Usuario = mongoose.model("usuarios", {
  nome: String,
  cpf: Number,
  email: String,
  senha: Number
});

app.get('/', function(req, res) {
    res.render('pages/home');
});

app.get('/cadastro', function(req, res) {
    res.render('pages/cadastro');
});

app.post('/cadastrarUsuario', (req, res) => {
  let salvar_usuario = new Usuario();

  salvar_usuario.nome = req.body.nome;
  salvar_usuario.cpf = req.body.cpf;
  salvar_usuario.email = req.body.email;
  salvar_usuario.senha = req.body.senha;

  salvar_usuario.save(err => {
    if(err) {
      return res.status(500).send("Erro ao cadastrar");
    }
    return res.redirect("/usuario");
  });
});

app.get('/login', function (req, res) {
  res.render('pages/login');
});

app.post('/logar', function (req, res) {
  let usuario = req.body.usuario;
  let senha = req.body.senha;

  if (
    (usuario == 'visitante' && senha == '123')
  ) {
    res.redirect('/usuario');
  }

  else if (
    (usuario == 'adm' && senha == '123')
  ) {
    res.render('pages/adm');
  } else {
    res.send('Credenciais inválidas!');
  }
});

app.get('/usuario', function (req, res) {
  res.render('pages/usuario');
});

app.listen(port, () => {
  console.log("servidor rodando na porta", port);
});