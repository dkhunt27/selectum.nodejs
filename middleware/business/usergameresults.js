module.exports = function(sequelize, DataTypes){
    return sequelize.define("GameResults", {
        id: {type: sequelize.INTEGER, allowNull: false, unique: true, autoIncrement: true},
        betResult: {type: sequelize.INTEGER, allowNull: false},
        betPoints: {type: sequelize.INTEGER, allowNull: false}
    });
};

