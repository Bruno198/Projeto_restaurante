'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('restaurante', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      codindentificacao: {
        type: Sequelize.STRING
      },
    });
  },

  async down(queryInterface, Sequelize) {
    queryInterface.dropTable('restaurante');
  }
};
