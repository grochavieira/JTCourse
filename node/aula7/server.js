const express = require("express");

const app = express();

app.get("/", (request, response) => {
  response.send(`
  <form action='/' method='POST'>
    Nomezin: <input type="text" name="nome">
    <button>Enviar Input</button>
  </form>
  `);
});

app.post("/", (req, res) => {
  res.send("Recebi o formulário");
});

app.get("/contato", (request, response) => {
  response.send("Obrigado por entrar em contato");
});

app.listen(3333, () => {
  console.log("Acessar https://localhost:3333");
  console.log("Servidor executando na porta 3333...");
});
