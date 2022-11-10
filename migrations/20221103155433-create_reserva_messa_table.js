'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('reserva_messa', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome_do_reservante: {
        type: Sequelize.STRING
      },

      messa_para_ser_reservada: {
        type: Sequelize.INTEGER
      },

      id_messa: {
        type: Sequelize.INTEGER ,
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'pedidos',
            schema: 'public'
          },
          key: 'id'
          }
        } ,
    });
  },

  async down(queryInterface, Sequelize) {
    queryInterface.dropTable('reserva_messa');
  }
};
