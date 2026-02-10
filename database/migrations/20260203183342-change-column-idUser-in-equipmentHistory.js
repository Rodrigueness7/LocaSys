'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.changeColumn('equipmentHistorys', 'idUser', {
      type: Sequelize.INTEGER,
      allowNull: true
    });
    await queryInterface.changeColumn('equipmentHistorys', 'idSector', {
      type: Sequelize.INTEGER,
      allowNull: true
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.changeColumn('equipmentHistorys', 'idUser', {
      type: Sequelize.INTEGER,
      allowNull: false
    });
    await queryInterface.changeColumn('equipmentHistorys', 'idSector', {
      type: Sequelize.INTEGER,
      allowNull: false
    });
  }
};
