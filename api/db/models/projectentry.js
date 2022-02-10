const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ProjectEntry extends Model {
    static associate() { }
  }

  const options = {
    project_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
  };

  const attributes = {
    sequelize,
    modelName: 'ProjectEntry',
  };

  ProjectEntry.init(options, attributes);
  return ProjectEntry;
};
