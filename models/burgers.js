var orm = require("../config/orm");

var burger = {
    selectAll: function(cb) {
      orm.selectAll(function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    insertOne: function(column, value, cb) {
      orm.insertOne("burger", column, value, function(res) {
        cb(res);
      });
    },


    updateOne: function(column, condition, cb) {
      orm.updateOne("burger", column, condition, function(res) {
        cb(res);
      });
    },    
  };

  
  module.exports = burger;