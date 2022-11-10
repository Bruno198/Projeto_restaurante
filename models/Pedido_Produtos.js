const { Model, DataTypes } = require('sequelize');

class Pedido_Produto extends Model {

  static init(connection) {
    super.init({
        preferencias: DataTypes.TEXT,
        nome_da_pessoa: DataTypes.STRING,
        id_pedidos: DataTypes.INTEGER,
        messa: DataTypes.INTEGER,
    }, { sequelize: connection, timestamps: false });
  }
   static associate(models){
   // this.hasMany(models.Produtos, {foreignKey: "id_produtos", as: "produtos"});
   this.belongsToMany(models.Produtos, {foreignKey:"id_produtos", through: "pedidos_produtoss", as: "produtos"})
  }
};

module.exports = Pedido_Produto;

