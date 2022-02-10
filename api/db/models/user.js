const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Project }) {
      this.belongsToMany(Project, {
        through: 'UserTagEntry',
        foreignKey: 'user_id',
      });
    }
  }

  const attributes = {
    name: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    password: DataTypes.STRING,
    status: DataTypes.STRING,
  };

  const options = {
    sequelize,
    modelName: 'User',
  };

  User.init(attributes, options);
  return User;
};
