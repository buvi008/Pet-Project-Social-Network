const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Tag extends Model {
    static associate({ Project }) {
      this.belongsToMany(Project, {
        through: 'TagEntries',
        foreignKey: 'tag_id',
      });
    }
  }
  Tag.init({
    title: {
      type: DataTypes.STRING,
      unique: true,
    },
  }, {
    sequelize,
    modelName: 'Tag',
  });
  return Tag;
};
