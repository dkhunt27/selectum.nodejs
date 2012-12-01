module.exports = function(sqlize, DataTypes) {
    return sqlize.define("Users", {
        UserId: {type: sqlize.INTEGER, allowNull: false, unique: true, primaryKey: true, autoIncrement: true},
        FacebookUserId: {type: sqlize.INTEGER, allowNull: true},
        FacebookUserName: {type: sqlize.STRING, allowNull: false}
    });
} ;