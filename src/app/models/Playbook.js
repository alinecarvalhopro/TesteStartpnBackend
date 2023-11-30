const { DataTypes, Model } = require('sequelize');
const database = require('../../config/database');

class Playbook extends Model {}

Playbook.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userId: {
        type: DataTypes.INTEGER, 
        allowNull: false,
        references: {
          model: 'User', 
          key: 'id'
        }
      }
  },
  {
    sequelize: database, 
    modelName: 'playbook', 
    timestamps: false 
  }
);

module.exports = Playbook;
