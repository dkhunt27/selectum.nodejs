exports.show = function (req, res) {

    console.log("pseudo test framework running...");

    var Sequelize = require('sequelize');
    var sequelize = new Sequelize('selectum', 'root', '', {
        host: 'localhost',
        logging : false
    });

    init(sequelize, Sequelize, function(err, Teams, GameFilters, Games) {

        if (err) throw err;

        console.log("init tables");
        //console.log(Teams);
        //console.log(GameFilters);
        //console.log(Games);

        Teams
            .count()
                .success(function(teams){

                    console.log("teams");
                    console.log(teams);

                    Teams.find(1).success(function(team4) {
                        // project will be an instance of Project and stores the content of the table entry
                        // with id 123. if such an entry is not defined you will get null
                        console.log(team4.id);
                    });
                })
                .error(function(err){
                    console.log(err);
                });

        GameFilters.count().success(function(gameFilters) {
            console.log("gameFilters");
            console.log(gameFilters);
        });

        Games.count().success(function(games) {
            console.log("games");
            console.log(games);
        });
    });

    console.log("rendering");

    res.render('test', {title: "Pseudo Test Framework"});
}


function init(sequelize, Sequelize, callback) {

    var Teams = sequelize.define("Teams", {
        id: {type: Sequelize.INTEGER, allowNull: false, unique: true, primaryKey: true, autoIncrement: true},
        teamShortName: {type: Sequelize.STRING, allowNull: false, unique: true},
        teamLongName: {type: Sequelize.STRING, allowNull: false, unique: true}
    });

    var GameFilters = sequelize.define("GameFilters", {
        id: {type: Sequelize.INTEGER, allowNull: false, unique: true, primaryKey: true, autoIncrement: true},
        gameFilterName: {type: Sequelize.STRING, allowNull: false, unique: true},
        gameFilterStartDate: {type: Sequelize.DATE, allowNull: false},
        gameFilterEndDate: {type: Sequelize.DATE, allowNull: false}
    });
    
    var Games = sequelize.define("Games", {
        id: {type: Sequelize.INTEGER, allowNull: false, unique: true, primaryKey: true, autoIncrement: true},
        gameFilterId: {type: Sequelize.INTEGER, allowNull: false},
        gameDateTime: {type: Sequelize.DATE, allowNull: false},
        favoriteTeamId: {type: Sequelize.INTEGER, allowNull: false},
        underdogTeamId: {type: Sequelize.INTEGER, allowNull: false},
        spread: {type: Sequelize.FLOAT, allowNull: false},
        favoriteIsHomeTeam: {type: Sequelize.BOOLEAN, allowNull: false}
    });

    //GameFilters.hasOne(Games, { foreignKey: "gameFilterId"});
    //Teams.hasOne(Games, { foreignKey: "favoriteTeamId"});
    //Teams.hasOne(Games, { foreignKey: "underdogTeamId"});

    sequelize.sync({force: true})
        .success(function() {
            console.log("sync success");
        })
        .error(function(err) {
            console.log("sync error" + err);
        })

    createDBObject2(Teams, [
                            {"id": 1,"teamLongName": "No Bet","teamShortName": "X"},
                            {"id": 2,"teamLongName": "NY Giants","teamShortName": "NYG"},
                            {"id": 3,"teamLongName": "New England","teamShortName": "NE"}
                          ]);
    createDBObject(Teams, {"id": 4,"teamLongName": "Minnesota","teamShortName": "MIN"});
    createDBObject(Teams, {"id": 5,"teamLongName": "New Orleans","teamShortName": "NO"});
    createDBObject(Teams, {"id": 6,"teamLongName": "Buffalo","teamShortName": "BUF"});
    createDBObject(Teams, {"id": 7,"teamLongName": "Philadelphia","teamShortName": "PHI"});
    createDBObject(Teams, {"id": 8,"teamLongName": "Oakland","teamShortName": "OAK"});
    createDBObject(Teams, {"id": 9,"teamLongName": "Cincinnati","teamShortName": "CIN"});
    createDBObject(Teams, {"id": 10,"teamLongName": "Houston","teamShortName": "HOU"});
    createDBObject(Teams, {"id": 11,"teamLongName": "Dallas","teamShortName": "DAL"});
    createDBObject(Teams, {"id": 12,"teamLongName": "Washington","teamShortName": "WAS"});
    createDBObject(Teams, {"id": 13,"teamLongName": "Pittsburgh","teamShortName": "PIT"});
    createDBObject(Teams, {"id": 14,"teamLongName": "San Diego","teamShortName": "SD"});
    createDBObject(Teams, {"id": 15,"teamLongName": "San Francisco","teamShortName": "SF"});
    createDBObject(Teams, {"id": 16,"teamLongName": "Atlanta","teamShortName": "ATL"});
    createDBObject(Teams, {"id": 17,"teamLongName": "Carolina","teamShortName": "CAR"});
    createDBObject(Teams, {"id": 18,"teamLongName": "Chicago","teamShortName": "CHI"});
    createDBObject(Teams, {"id": 19,"teamLongName": "Detroit","teamShortName": "DET"});
    createDBObject(Teams, {"id": 20,"teamLongName": "NY Jets","teamShortName": "NYJ"});
    createDBObject(Teams, {"id": 21,"teamLongName": "Indianapolis","teamShortName": "IND"});
    createDBObject(Teams, {"id": 22,"teamLongName": "Baltimore","teamShortName": "BAL"});
    createDBObject(Teams, {"id": 23,"teamLongName": "Kansas City","teamShortName": "KC"});
    createDBObject(Teams, {"id": 24,"teamLongName": "Seattle","teamShortName": "SEA"});
    createDBObject(Teams, {"id": 25,"teamLongName": "Arizona","teamShortName": "ARI"});
    createDBObject(Teams, {"id": 26,"teamLongName": "Denver","teamShortName": "DEN"});
    createDBObject(Teams, {"id": 27,"teamLongName": "Tampa Bay","teamShortName": "TB"});
    createDBObject(Teams, {"id": 28,"teamLongName": "Miami","teamShortName": "MIA"});
    createDBObject(Teams, {"id": 32,"teamLongName": "Cleveland","teamShortName": "CLE"});
    createDBObject(Teams, {"id": 33,"teamLongName": "Jacksonville","teamShortName": "JAC"});
    createDBObject(Teams, {"id": 34,"teamLongName": "St. Louis","teamShortName": "STL"});
    createDBObject(Teams, {"id": 35,"teamLongName": "Tennessee","teamShortName": "TEN"});
    createDBObject(Teams, {"id": 36,"teamLongName": "Green Bay","teamShortName": "GB"});

    createDBObject(GameFilters, {"id": 1,"gameFilterName": "Week 1","gameFilterStartDate": "2012-09-04 00:00:00", "gameFilterEndDate": "2012-09-10 23:59:59"});
    createDBObject(GameFilters, {"id": 2,"gameFilterName": "Week 2","gameFilterStartDate": "2012-09-11 00:00:00", "gameFilterEndDate": "2012-09-17 23:59:59"});
    createDBObject(GameFilters, {"id": 3,"gameFilterName": "Week 3","gameFilterStartDate": "2012-09-18 00:00:00", "gameFilterEndDate": "2012-09-24 23:59:59"});
    createDBObject(GameFilters, {"id": 4,"gameFilterName": "Week 4","gameFilterStartDate": "2012-09-25 00:00:00", "gameFilterEndDate": "2012-10-01 23:59:59"});
    createDBObject(GameFilters, {"id": 5,"gameFilterName": "Week 5","gameFilterStartDate": "2012-10-02 00:00:00", "gameFilterEndDate": "2012-10-08 23:59:59"});
    createDBObject(GameFilters, {"id": 6,"gameFilterName": "Week 6","gameFilterStartDate": "2012-10-09 00:00:00", "gameFilterEndDate": "2012-10-15 23:59:59"});
    createDBObject(GameFilters, {"id": 7,"gameFilterName": "Week 7","gameFilterStartDate": "2012-10-16 00:00:00", "gameFilterEndDate": "2012-10-22 23:59:59"});
    createDBObject(GameFilters, {"id": 8,"gameFilterName": "Week 8","gameFilterStartDate": "2012-10-23 00:00:00", "gameFilterEndDate": "2012-10-29 23:59:59"});
    createDBObject(GameFilters, {"id": 9,"gameFilterName": "Week 9","gameFilterStartDate": "2012-10-30 00:00:00", "gameFilterEndDate": "2012-11-05 23:59:59"});
    createDBObject(GameFilters, {"id": 10,"gameFilterName": "Week 10","gameFilterStartDate": "2012-11-06 00:00:00", "gameFilterEndDate": "2012-11-12 23:59:59"});
    createDBObject(GameFilters, {"id": 11,"gameFilterName": "Week 11","gameFilterStartDate": "2012-11-13 00:00:00", "gameFilterEndDate": "2012-11-19 23:59:59"});
    createDBObject(GameFilters, {"id": 12,"gameFilterName": "Week 12","gameFilterStartDate": "2012-11-20 00:00:00", "gameFilterEndDate": "2012-11-26 23:59:59"});
    createDBObject(GameFilters, {"id": 13,"gameFilterName": "Week 13","gameFilterStartDate": "2012-11-27 00:00:00", "gameFilterEndDate": "2012-12-03 23:59:59"});
    createDBObject(GameFilters, {"id": 14,"gameFilterName": "Week 14","gameFilterStartDate": "2012-12-04 00:00:00", "gameFilterEndDate": "2012-12-10 23:59:59"});
    createDBObject(GameFilters, {"id": 15,"gameFilterName": "Week 15","gameFilterStartDate": "2012-12-11 00:00:00", "gameFilterEndDate": "2012-12-17 23:59:59"});
    createDBObject(GameFilters, {"id": 16,"gameFilterName": "Week 16","gameFilterStartDate": "2012-12-18 00:00:00", "gameFilterEndDate": "2012-12-24 23:59:59"});
    createDBObject(GameFilters, {"id": 17,"gameFilterName": "Week 17","gameFilterStartDate": "2012-12-25 00:00:00", "gameFilterEndDate": "2012-12-31 23:59:59"});

    
    createDBObject(Games, {"id": 1,"gameFilterId": 2,"gameDateTime": "2012-09-13 20:20:00","favoriteTeamId": 36,"underdogTeamId": 18,"spread": 6,"favoriteIsHomeTeam": 1});
    createDBObject(Games, {"id": 2,"gameFilterId": 2,"gameDateTime": "2012-09-16 13:00:00","favoriteTeamId": 2,"underdogTeamId": 27,"spread": 7.5,"favoriteIsHomeTeam": 1});
    createDBObject(Games, {"id": 3,"gameFilterId": 2,"gameDateTime": "2012-09-16 13:00:00","favoriteTeamId": 3,"underdogTeamId": 25,"spread": 13.5,"favoriteIsHomeTeam": 1});
    createDBObject(Games, {"id": 4,"gameFilterId": 2,"gameDateTime": "2012-09-16 13:00:00","favoriteTeamId": 4,"underdogTeamId": 21,"spread": 1.5,"favoriteIsHomeTeam": 0});
    createDBObject(Games, {"id": 5,"gameFilterId": 2,"gameDateTime": "2012-09-16 13:00:00","favoriteTeamId": 5,"underdogTeamId": 17,"spread": 2.5,"favoriteIsHomeTeam": 0});
    createDBObject(Games, {"id": 6,"gameFilterId": 2,"gameDateTime": "2012-09-16 13:00:00","favoriteTeamId": 6,"underdogTeamId": 23,"spread": 3,"favoriteIsHomeTeam": 1});
    createDBObject(Games, {"id": 7,"gameFilterId": 2,"gameDateTime": "2012-09-16 13:00:00","favoriteTeamId": 7,"underdogTeamId": 22,"spread": 2.5,"favoriteIsHomeTeam": 1});
    createDBObject(Games, {"id": 8,"gameFilterId": 2,"gameDateTime": "2012-09-16 13:00:00","favoriteTeamId": 8,"underdogTeamId": 28,"spread": 2.5,"favoriteIsHomeTeam": 0});
    createDBObject(Games, {"id": 9,"gameFilterId": 2,"gameDateTime": "2012-09-16 13:00:00","favoriteTeamId": 9,"underdogTeamId": 32,"spread": 7,"favoriteIsHomeTeam": 1});
    createDBObject(Games, {"id": 10,"gameFilterId": 2,"gameDateTime": "2012-09-16 13:00:00","favoriteTeamId": 10,"underdogTeamId": 33,"spread": 7.5,"favoriteIsHomeTeam": 0});
    createDBObject(Games, {"id": 11,"gameFilterId": 2,"gameDateTime": "2012-09-16 16:05:00","favoriteTeamId": 11,"underdogTeamId": 24,"spread": 3,"favoriteIsHomeTeam": 0});
    createDBObject(Games, {"id": 12,"gameFilterId": 2,"gameDateTime": "2012-09-16 16:05:00","favoriteTeamId": 12,"underdogTeamId": 34,"spread": 3,"favoriteIsHomeTeam": 0});
    createDBObject(Games, {"id": 13,"gameFilterId": 2,"gameDateTime": "2012-09-16 16:25:00","favoriteTeamId": 13,"underdogTeamId": 20,"spread": 6,"favoriteIsHomeTeam": 1});
    createDBObject(Games, {"id": 14,"gameFilterId": 2,"gameDateTime": "2012-09-16 16:25:00","favoriteTeamId": 14,"underdogTeamId": 35,"spread": 6,"favoriteIsHomeTeam": 1});
    createDBObject(Games, {"id": 15,"gameFilterId": 2,"gameDateTime": "2012-09-16 20:20:00","favoriteTeamId": 15,"underdogTeamId": 19,"spread": 6.5,"favoriteIsHomeTeam": 1});
    createDBObject(Games, {"id": 16,"gameFilterId": 2,"gameDateTime": "2012-09-17 20:35:00","favoriteTeamId": 16,"underdogTeamId": 26,"spread": 3,"favoriteIsHomeTeam": 1});
    createDBObject(Games, {"id": 17,"gameFilterId": 3,"gameDateTime": "2012-09-20 20:20:00","favoriteTeamId": 17,"underdogTeamId": 2,"spread": 2.5,"favoriteIsHomeTeam": 1});
    createDBObject(Games, {"id": 18,"gameFilterId": 3,"gameDateTime": "2012-09-23 13:00:00","favoriteTeamId": 18,"underdogTeamId": 34,"spread": 7.5,"favoriteIsHomeTeam": 1});
    createDBObject(Games, {"id": 19,"gameFilterId": 3,"gameDateTime": "2012-09-23 13:00:00","favoriteTeamId": 11,"underdogTeamId": 27,"spread": 8,"favoriteIsHomeTeam": 1});
    createDBObject(Games, {"id": 20,"gameFilterId": 3,"gameDateTime": "2012-09-23 13:00:00","favoriteTeamId": 15,"underdogTeamId": 4,"spread": 6.5,"favoriteIsHomeTeam": 0});
    createDBObject(Games, {"id": 21,"gameFilterId": 3,"gameDateTime": "2012-09-23 13:00:00","favoriteTeamId": 19,"underdogTeamId": 35,"spread": 3.5,"favoriteIsHomeTeam": 0});
    createDBObject(Games, {"id": 22,"gameFilterId": 3,"gameDateTime": "2012-09-23 13:00:00","favoriteTeamId": 12,"underdogTeamId": 9,"spread": 3,"favoriteIsHomeTeam": 1});
    createDBObject(Games, {"id": 23,"gameFilterId": 3,"gameDateTime": "2012-09-23 13:00:00","favoriteTeamId": 20,"underdogTeamId": 28,"spread": 2.5,"favoriteIsHomeTeam": 0}); 
    createDBObject(Games, {"id": 24,"gameFilterId": 3,"gameDateTime": "2012-09-23 13:00:00","favoriteTeamId": 5,"underdogTeamId": 23,"spread": 9,"favoriteIsHomeTeam": 1}); 
    createDBObject(Games, {"id": 25,"gameFilterId": 3,"gameDateTime": "2012-09-23 13:00:00","favoriteTeamId": 6,"underdogTeamId": 32,"spread": 3,"favoriteIsHomeTeam": 0}); 
    createDBObject(Games, {"id": 26,"gameFilterId": 3,"gameDateTime": "2012-09-23 13:00:00","favoriteTeamId": 21,"underdogTeamId": 33,"spread": 3,"favoriteIsHomeTeam": 1}); 
    createDBObject(Games, {"id": 27,"gameFilterId": 3,"gameDateTime": "2012-09-23 16:05:00","favoriteTeamId": 7,"underdogTeamId": 25,"spread": 3.5,"favoriteIsHomeTeam": 0}); 
    createDBObject(Games, {"id": 28,"gameFilterId": 3,"gameDateTime": "2012-09-23 16:05:00","favoriteTeamId": 14,"underdogTeamId": 16,"spread": 3,"favoriteIsHomeTeam": 1}); 
    createDBObject(Games, {"id": 29,"gameFilterId": 3,"gameDateTime": "2012-09-23 16:25:00","favoriteTeamId": 10,"underdogTeamId": 26,"spread": 2,"favoriteIsHomeTeam": 0}); 
    createDBObject(Games, {"id": 30,"gameFilterId": 3,"gameDateTime": "2012-09-23 16:25:00","favoriteTeamId": 13,"underdogTeamId": 8,"spread": 4.5,"favoriteIsHomeTeam": 0}); 
    createDBObject(Games, {"id": 31,"gameFilterId": 3,"gameDateTime": "2012-09-23 20:25:00","favoriteTeamId": 22,"underdogTeamId": 3,"spread": 3,"favoriteIsHomeTeam": 1}); 
    createDBObject(Games, {"id": 32,"gameFilterId": 3,"gameDateTime": "2012-09-24 20:35:00","favoriteTeamId": 36,"underdogTeamId": 24,"spread": 3,"favoriteIsHomeTeam": 0}); 
    createDBObject(Games, {"id": 33,"gameFilterId": 4,"gameDateTime": "2012-09-27 20:20:00","favoriteTeamId": 22,"underdogTeamId": 32,"spread": 13,"favoriteIsHomeTeam": 1}); 
    createDBObject(Games, {"id": 34,"gameFilterId": 4,"gameDateTime": "2012-09-30 13:00:00","favoriteTeamId": 3,"underdogTeamId": 6,"spread": 4,"favoriteIsHomeTeam": 0}); 
    createDBObject(Games, {"id": 35,"gameFilterId": 4,"gameDateTime": "2012-09-30 13:00:00","favoriteTeamId": 19,"underdogTeamId": 4,"spread": 4,"favoriteIsHomeTeam": 1}); 
    createDBObject(Games, {"id": 36,"gameFilterId": 4,"gameDateTime": "2012-09-30 13:00:00","favoriteTeamId": 16,"underdogTeamId": 17,"spread": 7,"favoriteIsHomeTeam": 1}); 
    createDBObject(Games, {"id": 37,"gameFilterId": 4,"gameDateTime": "2012-09-30 13:00:00","favoriteTeamId": 15,"underdogTeamId": 20,"spread": 4,"favoriteIsHomeTeam": 0}); 
    createDBObject(Games, {"id": 38,"gameFilterId": 4,"gameDateTime": "2012-09-30 13:00:00","favoriteTeamId": 23,"underdogTeamId": 14,"spread": 1,"favoriteIsHomeTeam": 1}); 
    createDBObject(Games, {"id": 39,"gameFilterId": 4,"gameDateTime": "2012-09-30 13:00:00","favoriteTeamId": 10,"underdogTeamId": 35,"spread": 12,"favoriteIsHomeTeam": 1}); 
    createDBObject(Games, {"id": 40,"gameFilterId": 4,"gameDateTime": "2012-09-30 13:00:00","favoriteTeamId": 24,"underdogTeamId": 34,"spread": 2.5,"favoriteIsHomeTeam": 0});
    createDBObject(Games, {"id": 41,"gameFilterId": 4,"gameDateTime": "2012-09-30 16:05:00","favoriteTeamId": 25,"underdogTeamId": 28,"spread": 6.5,"favoriteIsHomeTeam": 1});
    createDBObject(Games, {"id": 42,"gameFilterId": 4,"gameDateTime": "2012-09-30 16:05:00","favoriteTeamId": 26,"underdogTeamId": 8,"spread": 6.5,"favoriteIsHomeTeam": 1}); 
    createDBObject(Games, {"id": 43,"gameFilterId": 4,"gameDateTime": "2012-09-30 16:05:00","favoriteTeamId": 9,"underdogTeamId": 33,"spread": 2,"favoriteIsHomeTeam": 0}); 
    createDBObject(Games, {"id": 44,"gameFilterId": 4,"gameDateTime": "2012-09-30 16:25:00","favoriteTeamId": 36,"underdogTeamId": 5,"spread": 8,"favoriteIsHomeTeam": 1}); 
    createDBObject(Games, {"id": 45,"gameFilterId": 4,"gameDateTime": "2012-09-30 16:25:00","favoriteTeamId": 27,"underdogTeamId": 12,"spread": 3,"favoriteIsHomeTeam": 1});
    createDBObject(Games, {"id": 46,"gameFilterId": 4,"gameDateTime": "2012-09-30 16:30:00","favoriteTeamId": 7,"underdogTeamId": 2,"spread": 2,"favoriteIsHomeTeam": 1}); 
    createDBObject(Games, {"id": 47,"gameFilterId": 4,"gameDateTime": "2012-10-01 20:35:00","favoriteTeamId": 11,"underdogTeamId": 18,"spread": 4,"favoriteIsHomeTeam": 1}); 
    createDBObject(Games, {"id": 48,"gameFilterId": 5,"gameDateTime": "2012-10-04 20:25:00","favoriteTeamId": 25,"underdogTeamId": 34,"spread": 1.5,"favoriteIsHomeTeam": 0});
    createDBObject(Games, {"id": 49,"gameFilterId": 5,"gameDateTime": "2012-10-07 13:00:00","favoriteTeamId": 16,"underdogTeamId": 12,"spread": 3,"favoriteIsHomeTeam": 0}); 
    createDBObject(Games, {"id": 50,"gameFilterId": 5,"gameDateTime": "2012-10-07 13:00:00","favoriteTeamId": 13,"underdogTeamId": 7,"spread": 3.5,"favoriteIsHomeTeam": 1}); 
    createDBObject(Games, {"id": 51,"gameFilterId": 5,"gameDateTime": "2012-10-07 13:00:00","favoriteTeamId": 36,"underdogTeamId": 21,"spread": 7,"favoriteIsHomeTeam": 0}); 
    createDBObject(Games, {"id": 52,"gameFilterId": 5,"gameDateTime": "2012-10-07 13:00:00","favoriteTeamId": 2,"underdogTeamId": 32,"spread": 9,"favoriteIsHomeTeam": 1}); 
    createDBObject(Games, {"id": 53,"gameFilterId": 5,"gameDateTime": "2012-10-07 16:25:00","favoriteTeamId": 4,"underdogTeamId": 35,"spread": 5.5,"favoriteIsHomeTeam": 1}); 
    createDBObject(Games, {"id": 54,"gameFilterId": 5,"gameDateTime": "2012-10-07 13:00:00","favoriteTeamId": 9,"underdogTeamId": 28,"spread": 3.5,"favoriteIsHomeTeam": 1});
    createDBObject(Games, {"id": 55,"gameFilterId": 5,"gameDateTime": "2012-10-07 13:00:00","favoriteTeamId": 22,"underdogTeamId": 23,"spread": 6,"favoriteIsHomeTeam": 0}); 
    createDBObject(Games, {"id": 56,"gameFilterId": 5,"gameDateTime": "2012-10-07 16:05:00","favoriteTeamId": 17,"underdogTeamId": 24,"spread": 3,"favoriteIsHomeTeam": 1}); 
    createDBObject(Games, {"id": 57,"gameFilterId": 5,"gameDateTime": "2012-10-07 16:05:00","favoriteTeamId": 18,"underdogTeamId": 33,"spread": 6,"favoriteIsHomeTeam": 0}); 
    createDBObject(Games, {"id": 58,"gameFilterId": 5,"gameDateTime": "2012-10-07 16:25:00","favoriteTeamId": 3,"underdogTeamId": 26,"spread": 6.5,"favoriteIsHomeTeam": 1}); 
    createDBObject(Games, {"id": 59,"gameFilterId": 5,"gameDateTime": "2012-10-07 16:25:00","favoriteTeamId": 15,"underdogTeamId": 6,"spread": 9.5,"favoriteIsHomeTeam": 1}); 
    createDBObject(Games, {"id": 60,"gameFilterId": 5,"gameDateTime": "2012-10-07 20:30:00","favoriteTeamId": 5,"underdogTeamId": 14,"spread": 3.5,"favoriteIsHomeTeam": 1}); 
    createDBObject(Games, {"id": 61,"gameFilterId": 5,"gameDateTime": "2012-10-08 20:35:00","favoriteTeamId": 10,"underdogTeamId": 20,"spread": 8,"favoriteIsHomeTeam": 0}); 
    createDBObject(Games, {"id": 62,"gameFilterId": 6,"gameDateTime": "2012-10-11 20:25:00","favoriteTeamId": 13,"underdogTeamId": 35,"spread": 6,"favoriteIsHomeTeam": 0}); 
    createDBObject(Games, {"id": 63,"gameFilterId": 6,"gameDateTime": "2012-10-14 13:00:00","favoriteTeamId": 9,"underdogTeamId": 32,"spread": 1,"favoriteIsHomeTeam": 0}); 
    createDBObject(Games, {"id": 64,"gameFilterId": 6,"gameDateTime": "2012-10-14 13:00:00","favoriteTeamId": 20,"underdogTeamId": 21,"spread": 3,"favoriteIsHomeTeam": 1}); 
    createDBObject(Games, {"id": 65,"gameFilterId": 6,"gameDateTime": "2012-10-14 13:00:00","favoriteTeamId": 27,"underdogTeamId": 23,"spread": 4,"favoriteIsHomeTeam": 1}); 
    createDBObject(Games, {"id": 66,"gameFilterId": 6,"gameDateTime": "2012-10-14 13:00:00","favoriteTeamId": 16,"underdogTeamId": 8,"spread": 9,"favoriteIsHomeTeam": 1}); 
    createDBObject(Games, {"id": 67,"gameFilterId": 6,"gameDateTime": "2012-10-14 13:00:00","favoriteTeamId": 22,"underdogTeamId": 11,"spread": 3.5,"favoriteIsHomeTeam": 1}); 
    createDBObject(Games, {"id": 68,"gameFilterId": 6,"gameDateTime": "2012-10-14 13:00:00","favoriteTeamId": 7,"underdogTeamId": 19,"spread": 4,"favoriteIsHomeTeam": 1}); 
    createDBObject(Games, {"id": 69,"gameFilterId": 6,"gameDateTime": "2012-10-14 13:00:00","favoriteTeamId": 28,"underdogTeamId": 34,"spread": 3.5,"favoriteIsHomeTeam": 1}); 
    createDBObject(Games, {"id": 70,"gameFilterId": 6,"gameDateTime": "2012-10-14 16:05:00","favoriteTeamId": 3,"underdogTeamId": 24,"spread": 3.5,"favoriteIsHomeTeam": 0}); 
    createDBObject(Games, {"id": 71,"gameFilterId": 6,"gameDateTime": "2012-10-14 16:05:00","favoriteTeamId": 25,"underdogTeamId": 6,"spread": 4.5,"favoriteIsHomeTeam": 1}); 
    createDBObject(Games, {"id": 72,"gameFilterId": 6,"gameDateTime": "2012-10-14 16:25:00","favoriteTeamId": 12,"underdogTeamId": 4,"spread": 2,"favoriteIsHomeTeam": 1}); 
    createDBObject(Games, {"id": 73,"gameFilterId": 6,"gameDateTime": "2012-10-14 16:25:00","favoriteTeamId": 15,"underdogTeamId": 2,"spread": 6.5,"favoriteIsHomeTeam": 1}); 
    createDBObject(Games, {"id": 74,"gameFilterId": 6,"gameDateTime": "2012-10-14 20:30:00","favoriteTeamId": 10,"underdogTeamId": 36,"spread": 3.5,"favoriteIsHomeTeam": 1});
    createDBObject(Games, {"id": 75,"gameFilterId": 6,"gameDateTime": "2012-10-15 20:40:00","favoriteTeamId": 14,"underdogTeamId": 26,"spread": 1,"favoriteIsHomeTeam": 1});

    callback(null, Teams, GameFilters, Games);
}

function createDBObject(dbObject, dbJson) {
        dbObject.create(dbJson)
            .success(function (){
                console.log("create success " + dbObject.name + " " + dbJson.id);
            })
            .error(function (err){
                console.log("create error " + dbObject.name + " " + dbJson.id + " " + err);
            })
}

function createDBObject2(dbObject, dbJson) {
    console.log("createDBObject2");
    console.log(dbJson);
    console.log(dbJson.length);
    for (var i=0; i<dbJson.length; i++) {
        console.log(dbJson[i]);
        console.log(typeof(dbJson[i]));
        dbObject.create(dbJson[i])
            .success(function (msg){
                console.log("create success " + msg);
            })
            .error(function (err){
                console.log("create error " + err);
            })
    }
}