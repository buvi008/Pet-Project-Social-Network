const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Project extends Model {
    static associate({ Tag }) {
      this.belongsToMany(Tag, {
        through: 'TagEntries',
        foreignKey: 'project_id',
      });
    }
  }

  const options = {
    title: {
      type: DataTypes.STRING,
      unique: true,},
    description: DataTypes.TEXT,
    short_description: DataTypes.STRING,
    creator_id: DataTypes.INTEGER,
    collaborator_id: DataTypes.INTEGER,
  };

  const attributes = {
    sequelize,
    modelName: 'Project',
  };

  Project.init(options, attributes);
  return Project;
};
