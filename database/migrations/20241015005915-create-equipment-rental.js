'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('EquipmentRentals', {
      idEquipmentRental: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idBranch: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Branches',
          key: 'idBranch'
        }
      },
      codProd: {
        type: Sequelize.INTEGER,
        allowNull: false
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
        type: Sequelize.DECIMAL(13, 2),
        allowNull: false
      },
      releaseDate: {
        type: Sequelize.DATE,
        allowNull: false
      },
      initPeriod: {
        type: Sequelize.DATE,
        allowNull: false
      },
      finishPeriod: {
        type: Sequelize.DATE,
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