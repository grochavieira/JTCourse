const express = require("express");
const app = express();
const routes = require("./routes");

app.use(express.urlencoded({ extended: true }));
app.use(routes);
// app.get("/testes/:idUsuarios?", (request, response) => {
//   console.log(request.params);
//   console.log(request.query);
//   response.send(request.query.nome);
// });

// app.post("/", (req, res) => {
//   console.log(req.body);
//   res.send(`O que você me enviou foi: ${req.body.nome} ${req.body.sobrenome}`);
// });

// app.get("/contato", (request, response) => {
//   response.send("Obrigado por entrar em contato");
// });

app.listen(3333, () => {
  console.log("Acessar https://localhost:3333");
  console.log("Servidor executando na porta 3333...");
});
