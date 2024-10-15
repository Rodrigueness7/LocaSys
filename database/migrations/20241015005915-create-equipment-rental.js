'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('EquipmentRentals', {
      codProd: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      proposal: {
        type: Sequelize.STRING(45),
        allowNull: false
      },
      description: {
        type: Sequelize.STRING(80),
        allowNull: false
      },
      init: {
        type: Sequelize.DATE,
        allowNull: true
      },
      finish: {
        type: Sequelize.DATE,
        allowNull: true
      },
      entry: {
        type: Sequelize.DATE,
        allowNull: true
      },
      output: {
        type: Sequelize.DATE,
        allowNull: true
      },
      value: {
        type: Sequelize.DECIMAL(13,2),
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
    await queryInterface.dropTable('EquipmentRentals');
  }
};