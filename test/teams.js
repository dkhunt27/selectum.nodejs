module.exports = function(sqlize, DataTypes) {
    return sqlize.define("Teams", {
        id: {type: sqlize.INTEGER, allowNull: false, unique: true, primaryKey: true, autoIncrement: true},
        teamShortName: {type: sqlize.STRING, allowNull: false, unique: true},
        teamLongName: {type: sqlize.STRING, allowNull: false, unique: true}
    });
} ;