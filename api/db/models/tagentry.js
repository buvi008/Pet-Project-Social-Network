const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class TagEntry extends Model {
    static associate() { }
  }

  const options = {
    tag_id: DataTypes.INTEGER,
    project_id: DataTypes.INTEGER,
  };

  const attributes = {
    sequelize,
    modelName: 'TagEntry',
  };

  TagEntry.init(options, attributes);
  return TagEntry;
};
