"use strict";

module.exports = function(sequelize, DataTypes) {
    var Search = sequelize.define("Search", {
        username: DataTypes.STRING
    }, {
        classMethods: {
        }
    });

    return Search;
};