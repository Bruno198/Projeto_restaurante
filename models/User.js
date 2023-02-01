const { Model, DataTypes } = require('sequelize');

class user extends Model {

  static init(connection) {
    super.init({
        nome: DataTypes.STRING,
        sobrenome: DataTypes.STRING,
        email: DataTypes.STRING,
        telefone: DataTypes.STRING,
        paseword: DataTypes.STRING
    }, { sequelize: connection, timestamps: false });
  }
};

module.exports = user;

