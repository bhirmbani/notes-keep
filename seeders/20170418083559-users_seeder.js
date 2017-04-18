'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Users', [
    {
      first_name: 'Rosihan',
      last_name: 'Anwar',
      role: 'wartawan',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      first_name: 'Dewi',
      last_name: 'Lestari',
      role: 'cerpenis',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      first_name: 'Chairil',
      last_name: 'Anwar',
      role: 'penyair',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      first_name: 'Pramoedya Ananta',
      last_name: 'Toer',
      role: 'novelis',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      first_name: 'Ibu',
      last_name: 'Rumah Tangga',
      role: 'casual',
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ], {});
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Users', null, {});
  }
};
