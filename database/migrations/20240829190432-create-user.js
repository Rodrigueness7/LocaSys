'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      idUser: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING(20),
        allowNull: false
      },
      lastName: {
        type: Sequelize.STRING(20),
        allowNull: false
      },
      cpf: {
        type:Sequelize.STRING(11),
        allowNull:true
      },
      username: {
        type: Sequelize.STRING(80),
        allowNull: false
      },
      password: {
        type: Sequelize.STRING(22),
        allowNull: true
      },
      email: {
        type: Sequelize.STRING(50),
        allowNull: true
      },
      idSector: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Sectors',
          key: 'idSector'
        }
      },
      idProfile: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Profiles',
          key: 'idProfile'
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
    await queryInterface.dropTable('Users');
  }
};