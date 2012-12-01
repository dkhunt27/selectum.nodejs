module.exports = function(sequelize, DataTypes){
    return sequelize.define("GameFilters", {
        id: {type: sequelize.INTEGER, allowNull: false, unique: true, autoIncrement: true},
        gameFilterName: {type: sequelize.STRING, allowNull: false, unique: true},
        gameFilterStartDate: {type: sequelize.DATE, allowNull: false},
        gameFilterEndDate: {type: sequelize.DATE, allowNull: false}
    });
};

