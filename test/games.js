module.exports = function(sqlize, DataTypes){
    return sqlize.define("Games", {
        id: {type: sqlize.INTEGER, allowNull: false, unique: true, autoIncrement: true},
        dateTime: {type: sqlize.DATE, allowNull: false},
        spread: {type: sqlize.INTEGER, allowNull: false},
        favoriteIsHomeTeam: {type: sqlize.BOOLEAN, allowNull: false}
    });
};

