'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Equipaments', {
      codProd: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      equipament: {
        type: Sequelize.STRING(80),
        allowNull: false
      },
      type: {
        type: Sequelize.STRING(80),
        allowNull: false
      },
      idUser: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'idUser'
        }
      },
      value: {
        type: Sequelize.DECIMAL(13,2),
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
      idSector: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Sectors',
          key: 'idSector'
        }
      },
      idSupplier: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Suppliers',
          key: 'idSupplier'
        }
      },
      entryDate: {
        type: Sequelize.DATE,
        allowNull: false
      },
      deletionDate: {
        type: Sequelize.DATE,
        allowNull: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,

      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Equipaments');
  }
};