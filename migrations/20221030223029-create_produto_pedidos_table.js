'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('produtos_pedidos', {
      pedido_id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: {
            tableName: 'pedidos',
            schema: 'public'
          },
          key: 'id'
        }
      },

      produto_id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: {
            tableName: 'produtos',
            schema: 'public'
          },
          key: 'id'
        }
      },
      
    });
  },

  async down(queryInterface, Sequelize) {
    queryInterface.dropTable('produtos_pedidos');
  }
};
