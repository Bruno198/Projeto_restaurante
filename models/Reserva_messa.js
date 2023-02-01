const { INTEGER } = require('sequelize');
const { Model, DataTypes } = require('sequelize');

class reserva_messa extends Model {

  static init(connection) {
    super.init({
        nome_do_reservante: DataTypes.STRING,
        messa_para_ser_reservada: DataTypes.INTEGER,
        id_messa : DataTypes.INTEGER ,
    }, { sequelize: connection, timestamps: false });
  }
 static associate(models){
    this.belongsTo(models.Pedidos, {foreignKey: "id_pedidos", as: "pedidos"});
  //  this.belongsTo(models.Pedidos, {foreignKey:"id_messa", as: "pedidos"})
  }//hasMany
  //belongsTo

  /*
    belongsTo é 1 para 1
    hasMany é 1 para muitos(N)
    */
};

module.exports = reserva_messa;

