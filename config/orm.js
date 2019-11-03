var connection = require("./connection");

var orm = {
    allBurgers: (cb) => {
        connection.query("SELECT * FROM burgers", (err, res) => {
            if (err) { throw err };
            cb(res);
        });
    },
    createBurger: (title, cb) => {
        var query = "INSERT INTO burgers (burger_name, devoured) VALUES ('" + title + "', false)"
        connection.query(query, (err, res) => {
            if (err) { throw err };
            cb(res);
        });
    },
    updateBurger: (id, cb) => {
        var query = "UPDATE burgers SET devoured=true WHERE id=" + id;
        connection.query(query, (err, res) => {
            if (err) { throw err };
            cb(res);
        });
    }
};

module.exports = orm;