'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Equipments', 'idType', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Types',
        key: 'idType'
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Equipments', 'idType')
  }
};
