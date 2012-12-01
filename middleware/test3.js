var patio = require("patio");
var helpers = require("../models/helpers.js");
var models = require("../models/models.js");

exports.show = function (req, res) {
    console.log('running test3')
    //connect
    patio.camelize = true;
    patio.connect("mysql://nodejs:nodejs@localhost:3306/selectum?maxConnections=50&minConnections=10");
    patio.configureLogging();
    patio.LOGGER.level = "ERROR";

    /*
    helpers.loadData().chain(function () {
        console.log("done loading data");
    }, function (err) {
        console.error(err);
        patio.disconnect();
    });
    */
    //sync the model so it can be used
    patio.syncModels().then(function(){

        // Find user with primary key (id) 1
        models.Team.findById(1).then(function(team){
            // SELECT * FROM user WHERE id = 1
            console.log("found team");
            console.log(team.teamLongName);
        }, errorHandler);
    }, errorHandler);



    process.on("uncaughtException", function (err) {
        console.trace(err);
    });
}

function errorHandler(){
    console.log("error occurred");
}