var patio = require("patio");
var data = require(__dirname + "/data.js");
var helper = require(__dirname + "/schemas.js");
var comb = require("comb");
var models = require(__dirname + "/models.js");


exports.loadData = function () {
    patio.camelize = true;
    var ret = new comb.Promise();
    helper.createTables().then(function () {
        //sync our models
        return comb.when(
            models.Team.save(data.team),
            models.GameFilter.save(data.gameFilter),
            models.Game.save(data.game)
        ).then(ret);
    }, comb.hitch(ret, "errback"));
    return ret;
};

exports.dropModels = function () {
    return helper.dropTableAndDisconnect();
};