var assert = require('assert');
var patio = require("patio");
var helpers = require("../models/helpers.js");
var models = require("../models/models.js");

describe ("dto", function() {
    describe("#sync data", function(){
        it('should load teams table', function() {

            patio.camelize = true;
            patio.connect("mysql://nodejs:nodejs@localhost:3306/selectum?maxConnections=50&minConnections=10");
            patio.configureLogging();
            patio.LOGGER.level = "ERROR";

            patio.syncModels().then(function(){
                assert.isTrue(true);
            }, patioErrorHandler);

        });
        it('table counts should equal', function() {

            patio.syncModels().then(function(){
                models.Team.count().then(function(count){
                    assert.equal(33, count);
                });

                models.GameFilter.count().then(function(count){
                    assert.equal(17, count);
                });

                models.Game.count().then(function(count){
                    assert.equal(75, count);
                });
            }, patioErrorHandler);
        });
    }) ;
});

function patioErrorHandler(error) {
    assert.fail(error);
    patio.disconnect();
};