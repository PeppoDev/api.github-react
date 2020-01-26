import { Model, DataTypes } from "sequelize";

class Repo extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        language: DataTypes.STRING,
        url: DataTypes.STRING
      },
      {
        sequelize
      }
    );
  }
  static associate(models) {
    this.belongsTo(models.User, { foreignKey: "user_id", as: "username" });
  }
}

export default Repo;
