'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.removeColumn('Equipments', 'type');
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.addColumn('Equipments', 'type', {
      type: Sequelize.STRING,
      allowNull: false
    })
  }
};
