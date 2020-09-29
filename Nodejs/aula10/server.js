const express = require("express");
const app = express();
const routes = require("./routes");
const path = require("path");

app.use(express.urlencoded({ extended: true }));
app.use(routes);
app.set("views", path.resolve(__dirname, "src", "views"));
app.set("view engine", "ejs");

app.listen(3333, () => {
  console.log("Acessar https://localhost:3333");
  console.log("Servidor executando na porta 3333...");
});
