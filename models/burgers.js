var orm = require("../config/orm");

var burger = {
  selectAll: function (cb) {
    orm.selectAll(function (res) {
      cb(res);
    });
  },

  insertOne: function (value, cb) {
    orm.insertOne(value, function (res) {
      cb(res);
    });
  },

  updateOne: function(value, condition, cb) {
    console.log("this is models cd, ", cb)
    orm.updateOne(value, condition, function(res) {
      cb(res);
    });
  }
};


module.exports = burger;