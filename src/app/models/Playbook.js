'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Playbook extends Model {
    static associate(models) {
      Playbook.belongsTo(models.User, { foreignKey: 'userId' });
      Playbook.belongsTo(models.Category, { foreignKey: 'categoryId' });
    }
  }
  Playbook.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Playbook',
    timestamps: true
  });
  return Playbook;
};