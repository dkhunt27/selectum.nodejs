var patio = require("patio");
var comb = require("comb");
var DB;

exports.createTables = function () {
    var db = patio.defaultDatabase;
    return comb.serial([
        function () {
            return db.forceDropTable(["game","team", "gameFilter"]);
        },
        function () {
            return db.createTable("team", function () {
                this.primaryKey("teamId");
                this.teamId2(String, {size:5, allowNull:false, unique:true});
                this.teamShortName(String, {size:5, allowNull:false, unique:true});
                this.teamLongName(String, {size:25, allowNull:false, unique:true});
                this.index("teamShortName");
            });
        },
        function () {
            return db.createTable("gameFilter", function () {
                this.primaryKey("gameFilterId");
                this.gameFilterId2(String, {size:5, allowNull:false, unique:true});
                this.gameFilterName(String, {size:25, allowNull:false});
                this.gameFilterStartDate(String, {size:25, allowNull:false});
                this.gameFilterEndDate(String, {size:25, allowNull:false});
            });
        },
        function () {
            return db.createTable("game", function () {
                this.primaryKey("gameId");
                this.gameId2(String, {size:5, allowNull:false, unique:true});
                this.foreignKey("gameFilterId", "gameFilter", {key:"gameFilterId"});
                this.gameDateTime(String, {size:25, allowNull:false});
                this.foreignKey("favoriteTeamId", "team", {key:"teamId"});
                this.foreignKey("underdogTeamId", "team", {key:"teamId"});
                this.spread(String, {size:5, allowNull:false});
                this.favoriteIsHomeTeam(String, {size:1, allowNull:false});
            });
        }
    ]);
};


exports.dropTableAndDisconnect = function () {
    return comb.executeInOrder(patio, DB, function (patio, db) {
        db.forceDropTable(["game","team", "gameFilter"]);
        patio.disconnect();
    });
};