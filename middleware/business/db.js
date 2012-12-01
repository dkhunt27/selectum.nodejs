var Sequelize = require("sequelize");

db = function () { };

//var config = require("config.js");
//var sequelize = new Sequelize(config.database.databaseName, config.database.username, config.database.password, {logging: config.database.logging});
var sequelize = new Sequelize("selectum", "root", "", {logging: false});

console.log(__dirname);

db.prototype.Teams = sequelize.import(__dirname + "/teams.js");
db.prototype.GameFilters = sequelize.import(__dirname + "/gamefilters.js");
db.prototype.Games = sequelize.import(__dirname + "/games.js");

this.Games.hasOne(this.GameFilters);
this.Games.hasOne(this.Teams, { as: "favoriteTeamId"});
this.Games.hasOne(this.Teams, { as: "underdogTeamId"});

/*
sequelize.sync({force: true})
    .on('success', function() {
        Teams
            .create({ teamShortName: 'Team ', description: 'A nice MySQL ORM for NodeJS' })
            .on('success', function(project) {
                Task.create({ name: 'Choose a nice MySQL connector', deadline: new Date(), importance: 10 })
                    .on('success', function(task1) {
                        Task.create({ name: 'Build the rest', deadline: new Date(), importance: 90 })
                            .on('success', function(task2) {
                                project.setTasks([task1, task2]).on('success', function(tasks) {
                                    console.log(project)
                                    console.log(tasks)
                                })
                            })
                    })
            })
    })
    .on('error', function() {
        console.log('error syncing');
    })
*/

db.prototype.BuildTestData = function(callback) {

            Teams.build({"id": 1,"teamLongName": "No Bet","teamShortName": "X"});
            Teams.build({"id": 2,"teamLongName": "NY Giants","teamShortName": "NYG"});
            Teams.build({"id": 3,"teamLongName": "New England","teamShortName": "NE"});
            Teams.build({"id": 4,"teamLongName": "Minnesota","teamShortName": "MIN"});
            Teams.build({"id": 5,"teamLongName": "New Orleans","teamShortName": "NO"});
            Teams.build({"id": 6,"teamLongName": "Buffalo","teamShortName": "BUF"});
            Teams.build({"id": 7,"teamLongName": "Philadelphia","teamShortName": "PHI"});
            Teams.build({"id": 8,"teamLongName": "Oakland","teamShortName": "OAK"});
            Teams.build({"id": 9,"teamLongName": "Cincinnati","teamShortName": "CIN"});
            Teams.build({"id": 10,"teamLongName": "Houston","teamShortName": "HOU"});
            Teams.build({"id": 11,"teamLongName": "Dallas","teamShortName": "DAL"});
            Teams.build({"id": 12,"teamLongName": "Washington","teamShortName": "WAS"});
            Teams.build({"id": 13,"teamLongName": "Pittsburgh","teamShortName": "PIT"});
            Teams.build({"id": 14,"teamLongName": "San Diego","teamShortName": "SD"});
            Teams.build({"id": 15,"teamLongName": "San Francisco","teamShortName": "SF"});
            Teams.build({"id": 16,"teamLongName": "Atlanta","teamShortName": "ATL"});
            Teams.build({"id": 17,"teamLongName": "Carolina","teamShortName": "CAR"});
            Teams.build({"id": 18,"teamLongName": "Chicago","teamShortName": "CHI"});
            Teams.build({"id": 19,"teamLongName": "Detroit","teamShortName": "DET"});
            Teams.build({"id": 20,"teamLongName": "NY Jets","teamShortName": "NYJ"});
            Teams.build({"id": 21,"teamLongName": "Indianapolis","teamShortName": "IND"});
            Teams.build({"id": 22,"teamLongName": "Baltimore","teamShortName": "BAL"});
            Teams.build({"id": 23,"teamLongName": "Kansas City","teamShortName": "KC"});
            Teams.build({"id": 24,"teamLongName": "Seattle","teamShortName": "SEA"});
            Teams.build({"id": 25,"teamLongName": "Arizona","teamShortName": "ARI"});
            Teams.build({"id": 26,"teamLongName": "Denver","teamShortName": "DEN"});
            Teams.build({"id": 27,"teamLongName": "Tampa Bay","teamShortName": "TB"});
            Teams.build({"id": 28,"teamLongName": "Miami","teamShortName": "MIA"});
            Teams.build({"id": 32,"teamLongName": "Cleveland","teamShortName": "CLE"});
            Teams.build({"id": 33,"teamLongName": "Jacksonville","teamShortName": "JAC"});
            Teams.build({"id": 34,"teamLongName": "St. Louis","teamShortName": "STL"});
            Teams.build({"id": 35,"teamLongName": "Tennessee","teamShortName": "TEN"});
            Teams.build({"id": 36,"teamLongName": "Green Bay","teamShortName": "GB"});

    callback(null);
};

exports.db = db;