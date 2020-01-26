import Repo from "../db/models/repo";
import API from "../services/apiGit";
import User from "../db/models/user";

export default {
  async index(req, res) {
    const { username } = req.body;

    const user = await User.findOne({
      where: { username },
      include: { association: "repos" }
    });

    if (!user) {
      return res.status(400).json({ error: "Usuário não encontrado" });
    }

    return res.json(user.repos);
  },

  async store(user_id, username) {
    const { data } = await API.getRepos(username);
    data.forEach(async repo => {
      const { name, url, language } = repo;
      await Repo.create({ name, url, language, user_id });
    });
  }
};
