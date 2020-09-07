exports.paginaInicial = (request, response) => {
  response.send(`
    <form action='/' method='POST'>
      Nome: <input type="text" name="nome">
      Sobrenome: <input type="text" name="sobrenome">
      <button>Enviar Input</button>
    </form>
    `);
};

exports.trataPost = (req, res) => {
  res.send("Ei, sou sua nova rota de post");
};
