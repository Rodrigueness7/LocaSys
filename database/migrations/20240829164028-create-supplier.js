'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Suppliers', {
      idSupplier: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      supplier: {
        type: Sequelize.STRING(80),
        allowNull: false
      },
      email: {
        type: Sequelize.STRING(80)
      },
      contact: {
        type: Sequelize.STRING(45)
      },
      CNPJ: {
        type: Sequelize.STRING(45),
        allowNull: false
      },
      address: {
        type: Sequelize.STRING(80)
      },
      zipCode: {
        type: Sequelize.STRING(45),
        allowNull: false
      },
      state: {
        type: Sequelize.STRING(45),
        allowNull: false
      },
      city: {
        type: Sequelize.STRING(45),
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
    await queryInterface.dropTable('Suppliers');
  }
};