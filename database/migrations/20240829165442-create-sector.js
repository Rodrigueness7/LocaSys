'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Sectors', {
      idSector: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      sector: {
        type: Sequelize.STRING(80),
        allowNull: false
      },
      idFilial: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Filials',
          key: 'idFilial'
        }
      },
      deletionDate: {
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
    await queryInterface.dropTable('Sectors');
  }
};