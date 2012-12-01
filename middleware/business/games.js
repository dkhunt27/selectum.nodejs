module.exports = function(sequelize, DataTypes){
    return sequelize.define("Games", {
        id: {type: sequelize.INTEGER, allowNull: false, unique: true, autoIncrement: true},
        gameDateTime: {type: sequelize.DATE, allowNull: false},
        spread: {type: sequelize.FLOAT, allowNull: false},
        favoriteIsHomeTeam: {type: sequelize.BOOLEAN, allowNull: false}
    });
};

