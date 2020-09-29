require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose
  .connect(process.env.CONNECTIONSTRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("Conectei a base de dados.");
    app.emit("pronto");
  })
  .catch((e) => console.log(e));
const session = require("express-session"); // Salva a sessão (cookie) sobre o cliente
const MongoStore = require("connect-mongo")(session); // Salva as sessões no banco de dados
const flash = require("connect-flash"); // Depois que são lidas, elas somem da aplicação
const routes = require("./routes"); // Rotas da aplicação
const path = require("path"); // Caminhos
const helmet = require("helmet");
const csrf = require("csurf"); // tokens para os formulários, para q nenhum site externo possa
const {
  middlewareGlobal,
  checkCsrfError,
  csrfMiddleware,
} = require("./src/middlewares/middleware");

app.use(helmet());
app.use(express.urlencoded({ extended: true })); // pode postar formulários dentro da aplicação
app.use(express.json()); // para utilizar json dentro da aplicação
app.use(express.static(path.resolve(__dirname, "public"))); // todos os arquivos estáticos da aplicação e podem ser acessados diretamente

const sessionOptions = session({
  secret: "dalsjd28wjf023jfaksljdakljd1234",
  store: new MongoStore({ mongooseConnection: mongoose.connection }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true,
  },
}); // configurações de sessão

app.use(sessionOptions);
app.use(flash());

app.set("views", path.resolve(__dirname, "src", "views")); // os arquivos que serão renderizados
app.set("view engine", "ejs"); // qual engine é utilizada para renderizar os arquivos

app.use(csrf());
// Nosos próprios middlewares
app.use(middlewareGlobal, checkCsrfError, csrfMiddleware);
app.use(routes);

app.on("pronto", () => {
  app.listen(3333, () => {
    console.log("Acessar https://localhost:3333");
    console.log("Servidor executando na porta 3333...");
  });
});
