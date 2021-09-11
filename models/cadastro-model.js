const mongoose = require("mongoose");

const Cadastro = mongoose.model("usuarios", {
  nome: String,
  cpf: Number,
  email: Number,
  senha: Number
});

module.exports = Cadastro;