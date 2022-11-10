const { Model, DataTypes } = require('sequelize');

class Restaurante extends Model {

  static init(connection) {
    super.init({
        codindentificacao: DataTypes.STRING,
    }, { sequelize: connection, timestamps: false });
  }
};

module.exports = Restaurante;

