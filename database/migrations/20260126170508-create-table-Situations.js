'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Situations', {
      idSituation: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      situation: {
        type: Sequelize.STRING(80),
        allowNull: false
      }
    }); 
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Situations');
  }
};
