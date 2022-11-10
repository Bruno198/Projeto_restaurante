const { Model, DataTypes } = require('sequelize');

class Produtos extends Model {

  static init(connection) {
    super.init({
        nome_do_produto: DataTypes.STRING,
        quantidade: DataTypes.INTEGER,
        valor_do_produto: DataTypes.FLOAT,
    }, { sequelize: connection, timestamps: false });
  }
 static associate(models){
   // this.hasMany(models.Pedidos, {foreignKey: "id_produtos", as: "pedidos"});
    this.belongsToMany(models.Pedidos, {foreignKey:"id_produtos", through: "produtos_pedidos",as: "pedidos"})
  }//hasMany
  //belongsTo

  /*
    belongsTo é 1 para 1
    hasMany é 1 para muitos(N)
    */
};

module.exports = Produtos;

