'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Filials', {
      idFilial: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      filial: {
        type: Sequelize.STRING(80),
        allowNull: false
      },
      CNPJ: {
        type: Sequelize.STRING(14),
        allowNull: true
      },
      corporateName: {
        type: Sequelize.STRING(80),
        allowNull: true
      },
      uniqueIdentifier: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Filials');
  }
};