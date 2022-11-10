'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('produtos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome_do_produto: {
        type: Sequelize.STRING
      },

      quantidade: {
        type: Sequelize.INTEGER
      },

      valor_do_produto: {
        type: Sequelize.FLOAT
      },
    });
  },

  async down(queryInterface, Sequelize) {
    queryInterface.dropTable('produtos');
  }
};
