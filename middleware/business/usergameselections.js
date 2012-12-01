module.exports = function(sequelize, DataTypes){
    return sequelize.define("UserGameSelections", {
        id: {type: sequelize.INTEGER, allowNull: false, unique: true, autoIncrement: true},
        bet: {type: sequelize.INTEGER, allowNull: false, unique: false}
    });
};

