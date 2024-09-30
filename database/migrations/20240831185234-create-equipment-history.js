'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('equipmentHistorys', {
      idEquipmentHistory: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idEquipment: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Equipments',
          key: 'idEquipment'
        }
      },
      reason: {
        type: Sequelize.STRING,
        allowNull: true
      },
      entryDate: {
        type: Sequelize.DATE,
        allowNull: false
      },
      returnDate: {
        type: Sequelize.DATE,
        allowNull: true
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
    await queryInterface.dropTable('equipmentHistorys');
  }
};