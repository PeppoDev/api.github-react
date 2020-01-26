import User from "../db/models/user";
import API from "../services/apiGit";
import RepoController from "./RepoController";

export default {
  async index(req, res) {
    const users = await User.findAll();
    return res.json(users);
  },

  async store(req, res) {
    const { username, password } = req.body;
    const userData = await API.getUser(username);
    if (!userData) {
      return res.status(400).json({ error: "Usuário não encontrado" });
    }
    const user = await User.create({ username, password });
    await RepoController.store(user.id, username);
    return res.json(user);
  }
};
