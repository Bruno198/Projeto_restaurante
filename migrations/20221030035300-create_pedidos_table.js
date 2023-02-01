'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('pedidos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      preferencias: {
        type: Sequelize.TEXT ,
      },


      nome_da_pessoa: {
        type: Sequelize.STRING ,
      },

      id_pedidos: {
        type: Sequelize.INTEGER ,
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'produtos',
            schema: 'public'
          },
          key: 'id'
          }
        } ,

      

      messa: {
        type: Sequelize.INTEGER ,
      },

    });
  },

  async down(queryInterface, Sequelize) {
    queryInterface.dropTable('pedidos');
  }
};
