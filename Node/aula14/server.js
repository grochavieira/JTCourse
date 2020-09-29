require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose
  .connect(process.env.CONNECTIONSTRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Conectei a base de dados.");
    app.emit("pronto");
  })
  .catch((e) => console.log(e));

const routes = require("./routes");
const path = require("path");
const { middlewareGlobal } = require("./src/middlewares/middleware");

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, "public")));

// Nosos próprios middlewares
app.use(middlewareGlobal);
app.use(routes);

app.set("views", path.resolve(__dirname, "src", "views"));
app.set("view engine", "ejs");

app.on("pronto", () => {
  app.listen(3333, () => {
    console.log("Acessar https://localhost:3333");
    console.log("Servidor executando na porta 3333...");
  });
});
