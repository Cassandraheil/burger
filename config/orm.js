var connection = require("../config/connection");

var orm = {
    selectAll: function (cb) {
        var queryString = "SELECT * FROM burgers;";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },


    insertOne: function (value, cb) {
        var queryString = "INSERT INTO burgers (burger_name) VALUES (?)";

        // console.log(queryString)
        console.log("values here ", value)

        connection.query(queryString, value, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    updateOne: function (value, cb) {
        var queryString = "UPDATE burgers SET (?) WHERE (?)";
        
        console.log("condition we're looking for",  value);

        connection.query(queryString, [{ devoured:value.devoured}, {id:value.id}], function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    }
};


module.exports = orm