exports.paginaInicial = (request, response) => {
  response.render("index");
  return;
};

exports.trataPost = (req, res) => {
  res.send(req.body);
};
