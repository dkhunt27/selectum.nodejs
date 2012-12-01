module.exports = function(sequelize, DataTypes){
    return sqlize.define("GameResults", {
        id: {type: sequelize.INTEGER, allowNull: false, unique: true, autoIncrement: true},
        favoriteScore: {type: sequelize.INTEGER, allowNull: false},
        underdogScore: {type: sequelize.INTEGER, allowNull: false},
        gamePeriod: {type: sequelize.STRING, allowNull: false}
    });
};

