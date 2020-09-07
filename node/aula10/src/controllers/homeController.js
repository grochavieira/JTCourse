exports.paginaInicial = (request, response) => {
  response.render("index");
};

exports.trataPost = (req, res) => {
  res.send("Ei, sou sua nova rota de post");
};
