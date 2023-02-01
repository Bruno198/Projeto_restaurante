'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING
      },

      sobrenome: {
        type: Sequelize.STRING
      },

      email: {
        type: Sequelize.STRING
      },

      telefone: {
        type: Sequelize.STRING
      },

      paseword: {
        type: Sequelize.STRING
      },
    });
  },

  async down(queryInterface, Sequelize) {
    queryInterface.dropTable('users');
  }
};
