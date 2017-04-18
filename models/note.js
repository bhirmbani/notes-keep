'use strict';
module.exports = function(sequelize, DataTypes) {
  var Note = sequelize.define('Note', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    type: DataTypes.STRING,
    number_of_words: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Note;
};