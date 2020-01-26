import { Sequelize } from "sequelize";
import User from "./models/user";
import Repo from "./models/repo";

const db = new Sequelize("curso", "curso", "curso", {
  dialect: "postgres",
  host: "db"
});

User.init(db);
Repo.init(db);

User.associate(db.models);
Repo.associate(db.models);

export default db;
