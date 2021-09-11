const mongoose = require("mongoose");

const Usuario = mongoose.model("usuarios", {
  nome: String,
  cpf: Number,
  email: String,
  senha: Number
});

module.exports = Usuario;