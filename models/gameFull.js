var patio = require("patio");
var models = require("../models/models.js");

exports.gameFull = function (game) {

    this.game = game;

    models.Team.filter({teamId: game.favoriteTeamId}).one().then(function(team){

        this.favoriteTeam = team;

    }, errorHandler);

    models.Team.filter({teamId: game.underdogTeamId}).one().then(function(team){

        this.underdogTeam = team;

    }, errorHandler);
}

function errorHandler(error) {
    console.log(error);
    patio.disconnect();
};