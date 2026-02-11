'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.changeColumn('Equipments', 'idUser', {
      type: Sequelize.INTEGER,
      allowNull: true
  
    
      
    });
    await queryInterface.changeColumn('Equipments', 'idSector', {
      type: Sequelize.INTEGER,
      allowNull: true
      
    });
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.changeColumn('Equipments', 'idUser', {
      type: Sequelize.INTEGER,
      allowNull: false
     

    });
    await queryInterface.changeColumn('Equipments', 'idSector', {
      type: Sequelize.INTEGER,
      allowNull: false
    
    }); 
  }
};
