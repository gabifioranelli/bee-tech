const express = require('express');
const app = express();
const port = process.env.PORT;

app.set('view engine', 'ejs');
app.use(express.static("public"));

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

// app.post = (req, res) => {
//   let salvar_usuario = new Usuario();

//   salvar_usuario.nome = req.body.nome;
//   salvar_usuario.cpf = req.body.cpf;
//   salvar_usuario.email = req.body.email;
//   salvar_usuario.senha = req.body.senha;

//   salvar_usuario.save(err => {
//     if(err) {
//       return res.status(500).send("Erro ao cadastrar");
//     }
//     return res.redirect("/");
//   });
// };

app.get('/login', function (req, res) {
  res.render('pages/login');
});

app.post('/logar', function (req, res) {
  let usuario = req.body.usuario;
  let senha = req.body.senha;

  if (
    (usuario == 'adm' && senha == '123') ||
    (usuario == 'visitante' && senha == '123')
  ) {
    res.send('Seja bem vindo' + usuario);
  } else {
    res.send('Credenciais inválidas!');
  }
});

app.get('/usuario', function (req, res) {
  res.render('pages/usuario');
});

// app.post("/cadastrarProdutos", (req, res) => {
//   let produto = new Produtos(); //criando um objeto do tipo Produtos

//   produto.nome = req.body.nome;
//   produto.vlUnit = req.body.valor;
//   produto.codigoBarras = req.body.codigo;

//   produto.save((err) => {
//     if(err) {
//       return res.status(500).send("Erro ao cadastrar");
//     }
//     return res.redirect("/produtos");
//   });
// });

app.listen(port, () => {
  console.log("servidor rodando na porta", port);
});