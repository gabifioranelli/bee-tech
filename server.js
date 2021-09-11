const express = require("express");
const mongoose = require("mongoose");


const app = express(); 
const port = 3000; 

mongoose.connect("mongodb+srv://gabi_fioranelli:inuyasha-91@cluster0.sshaw.mongodb.net/usuario?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true });

app.set("view engine", "ejs");
app.set("views", __dirname,"/views");
app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const cadastro_router = require("./routers/cadastro-router");

app.use("/cadastro", cadastro_router);

app.get("/", (req, res) => {
  res.send("página principal");
});

app.listen(port, () => {
  console.log("servidor rodando na porta", port);
});