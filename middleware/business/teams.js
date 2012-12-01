module.exports = function(sequelize, DataTypes) {
    return sequelize.define("Teams", {
        id: {type: sequelize.INTEGER, allowNull: false, unique: true, primaryKey: true, autoIncrement: true},
        teamShortName: {type: sequelize.STRING, allowNull: false, unique: true},
        teamLongName: {type: sequelize.STRING, allowNull: false, unique: true}
    });
} ;