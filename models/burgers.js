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

  updateOne: function (value, cb) {
    orm.updateOne(value, function (res) {
      cb(res);
    });
  },
};


module.exports = burger;