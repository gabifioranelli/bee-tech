//importando os módulos express e mongoose
const express = require("express");
const mongoose = require("mongoose");


const app = express(); //criando uma aplicação do express
const port = 5000; //definindo a porta

// conexão com banco de dados, com uso de flags para tratamentos de erros e evitar depreciação de código
mongoose.connect("mongodb+srv://gabi_fioranelli:inuyasha-91@cluster0.sshaw.mongodb.net/Biblioteca?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true });

//chamando o motor de visualização ejs
app.set("view engine", "ejs");
app.set("views", __dirname,"/views");
app.use(express.static("public"));

// permitindo que meus dados transitem entre as páginas em formato j.son
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const cadastro_router = require("./routers/cadastro-router");

app.use("/biblioteca", cadastro_router);

app.get("/", (req, res) => {
  res.send("página principal");
});

app.listen(port, () => {
  console.log("servidor rodando na porta", port);
});