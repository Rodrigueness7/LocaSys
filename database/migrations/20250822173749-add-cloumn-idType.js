'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Equipments', 'idTypeEquipment', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'TypeEquipments',
        key: 'idTypeEquipment'
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Equipments', 'idTypeEquipment')
  }
};
