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

    updateOne: function(value, condition, cb) {
        var queryString = "UPDATE burgers SET ";

        queryString += makeString(value);
        queryString += " WHERE ";
        queryString += condition;

        console.log("callback orm,", cb)
        // console.log(queryString)

        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    }
};


function makeString(ob) {
    var arr = [];
    for (var key in ob) {
        var value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }
    return arr.toString();
}


module.exports = orm