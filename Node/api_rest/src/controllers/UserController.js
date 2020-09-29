import User from "../models/UserModel";

class UserController {
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);
      return res.json({
        novoUser,
      });
    } catch (e) {
      return res
        .status(400)
        .json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async index(req, res) {
    try {
      const users = await User.findAll();
      console.log("USER_ID", req.userId);
      console.log("USER_EMAIL", req.userEmail);
      return res.json(users);
    } catch (e) {
      return res.json(null);
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id);
      return res.json(user);
    } catch (e) {
      return res.json(null);
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ["id não enviado."],
        });
      }

      const user = await User.findByPk(id);

      if (!user) {
        return res.status(400).json({
          errors: ["usuário não existe."],
        });
      }

      const novosDados = await user.update(req.body);

      return res.json(novosDados);
    } catch (e) {
      return res.status(400).json({
        errors: ["email já existe]."],
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ["id não enviado."],
        });
      }

      const user = await User.findByPk(id);

      if (!user) {
        return res.status(400).json({
          errors: ["usuário não existe."],
        });
      }

      await user.destroy();

      return res.json(user);
    } catch (e) {
      return res.status(400).json({
        errors: ["email já existe]."],
      });
    }
  }
}

export default new UserController();
