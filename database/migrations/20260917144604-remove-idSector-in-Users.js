'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Users', 'idSector');
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.addColumn('Users', 'idSector', {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'Sectors',
        key: 'idSector'
      }
    });
  }
};
