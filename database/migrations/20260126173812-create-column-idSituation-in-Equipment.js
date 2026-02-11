'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Equipments', 'idSituation', {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'Situations',
        key: 'idSituation'
      }
    });

    await queryInterface.addColumn('Equipments', 'dtSituation', {
      type: Sequelize.DATE,
      allowNull: true
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Equipments', 'idSituation');
    await queryInterface.removeColumn('Equipments', 'dtSituation');
  }
};
