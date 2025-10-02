'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  await queryInterface.changeColumn('Equipments', 'codProd', {
        type: Sequelize.INTEGER,
        allowNull: true
    });    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.changeColumn('Equipments', 'codProd', {
        type: Sequelize.INTEGER,
        allowNull: false
    });    
  }
};
