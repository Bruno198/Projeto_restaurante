const { Model, DataTypes } = require('sequelize');

class Pedidos extends Model {

  static init(connection) {
    super.init({
        preferencias: DataTypes.TEXT,
        nome_da_pessoa: DataTypes.STRING,
        id_pedidos: DataTypes.INTEGER,
        messa: DataTypes.INTEGER,
    }, { sequelize: connection, timestamps: false });
  }
   static associate(models){
    //this.belongsTo(models.Produtos, {foreignKey: "id_produtos", as: "produtos"});
    this.belongsToMany(models.Produtos, {foreignKey:"id_produtos", through: "produtos_pedidos",as: "produtos"})
    this.hasOne(models.reserva_messa, {foreignKey:"id_messa", as: "reserva_messaeroo qqui"})
  }
};

module.exports = Pedidos;

