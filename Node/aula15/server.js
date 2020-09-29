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

const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const flash = require("connect-flash");

const routes = require("./routes");
const path = require("path");
const { middlewareGlobal } = require("./src/middlewares/middleware");

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, "public")));

const sessionOptions = session({
  secret: "dalsjd28wjf023jfaksljdakljd1234",
  store: new MongoStore({ mongooseConnection: mongoose.connection }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true,
  },
});

app.use(sessionOptions);
app.use(flash());

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
