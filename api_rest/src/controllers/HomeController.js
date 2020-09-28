import Aluno from "../models/AlunoModel";

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: "Maria",
      sobrenome: "DB",
      email: "maria@gmail.com",
      idade: 25,
      peso: 50,
      altura: 1.5,
    });
    res.json({
      novoAluno,
    });
  }
}

export default new HomeController();
