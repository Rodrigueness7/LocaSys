'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Contacts', {
      idContact: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      contact: {
        type: Sequelize.STRING(45),
        allowNull: false
      },
      email: {
        type: Sequelize.STRING(45),
        allowNull: true
      },
      telephone: {
        type: Sequelize.STRING(45),
        allowNull: true
      },
      cellPhone: {
        type: Sequelize.STRING(45),
        allowNull: true
      },
      address: {
        type: Sequelize.STRING(45),
        allowNull: true
      },
      number: {
        type: Sequelize.STRING(45),
        allowNull: true
      },
      zipCode: {
        type: Sequelize.STRING(45),
        allowNull: true
      },
      state: {
        type: Sequelize.STRING(45),
        allowNull: true
      },
      county: {
        type: Sequelize.STRING(45),
        allowNull: true
      },
      district: {
        type: Sequelize.STRING(45),
        allowNull: true
      },
      idSupplier: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references: {
          model: 'Suppliers',
          key: 'idSupplier'
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
    await queryInterface.dropTable('Contacts');
  }
};