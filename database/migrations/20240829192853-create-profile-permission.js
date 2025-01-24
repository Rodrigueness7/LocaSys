'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Profile_permissions', {
      idProfile_permission: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idProfile: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Profiles',
          key: 'idProfile'
        }
      },
      idPermission: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Permissions',
          key: 'idPermission'
        }
      },
      allow: {
        allowNull: false,
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Profile_permissions');
  }
};