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
        type: Sequelize.STRING(45)
      },
      telephone: {
        type: Sequelize.STRING(45)
      },
      cellPhone: {
        type: Sequelize.STRING(45)
      },
      address: {
        type: Sequelize.STRING(45)
      },
      number: {
        type: Sequelize.STRING(45)
      },
      zipCode: {
        type: Sequelize.STRING(45)
      },
      state: {
        type: Sequelize.STRING(45)
      },
      county: {
        type: Sequelize.STRING(45)
      },
      district: {
        type: Sequelize.STRING(45)
      },
      idSupplier: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references: {
          model: 'Suppliers',
          key: 'idSupplier'
        }
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