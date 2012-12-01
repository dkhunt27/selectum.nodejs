var vows = require('vows');
var assert = require('assert');
var patio = require("patio");
var helpers = require("../models/helpers.js");
var models = require("../models/models.js");

function syncData(){
    patio.camelize = true;
    patio.connect("mysql://nodejs:nodejs@localhost:3306/selectum?maxConnections=50&minConnections=10");
    patio.configureLogging();
    patio.LOGGER.level = "ERROR";

    patio.syncModels().then(function(){
        this.callback;
    }, promise.emit('error', error));
}

function testCallback(){
    return ()
}

vows.describe('Models')
    .addBatch({'syncing':
        {topic: function() {
            var promise = new(events.EventEmitter);



            return promise;
        },
        ' should emit success': function(err, topic){
            assert.isNull(err);
            console.log(topic);
            assert.isObject(topic);
        }
    }})

    .run(); // Run it