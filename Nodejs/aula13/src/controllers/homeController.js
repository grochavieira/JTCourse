exports.paginaInicial = (request, response) => {
  console.log("respondendo ao cliente");
  response.render("index");
  return;
};

exports.trataPost = (req, res) => {
  res.send(req.body);
};
