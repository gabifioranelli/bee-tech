function validar(evento) {
  let nome = document.getElementById('nome').value;
  let autor = document.getElementById('autor').value;
  let codigo = document.getElementById('codigo').value;

  if(nome === "") {
    alert("Escreva um título");
    evento.preventDefault();
  }
  if(autor === "") {
    alert("Escreva o nome do autor da obra");
    evento.preventDefault();
  }
  if(codigo.length < 4 || codigo.length > 4) {
    alert("Seu código tem que ter 4 dígitos");
    evento.preventDefault();
  }
}
