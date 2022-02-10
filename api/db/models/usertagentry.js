const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class UserTagEntry extends Model {
    static associate() { }
  }

  const options = {
    tag_id: DataTypes.INTEGER,
  };

  const attributes = {
    sequelize,
    modelName: 'UserTagEntry',
  };
  UserTagEntry.init(options, attributes);
  return UserTagEntry;
};
