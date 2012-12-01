var vows = require('vows');
var assert = require('assert');


/*************************************************************************
 *  Annotated sample
 *************************************************************************/
vows.describe('Array').addBatch({                      // Batch
    'An array': {                                      // Context
        'with 3 elements': {                           // Sub-Context
            topic: [1, 2, 3],                          // Topic

            'has a length of 3': function (topic) {    // Vow
                assert.equal(topic.length, 3);
            }
        },
        'with zero elements': {                        // Sub-Context
            topic: [],                                 // Topic

            'has a length of 0': function (topic) {    // Vow
                assert.equal(topic.length, 0);
            },
            'returns *undefined*, when `pop()`ed': function (topic) {
                assert.isUndefined(topic.pop());
            }
        }
    }
}).export(module); // Export the Suite

/*************************************************************************
 *  another sample
 *************************************************************************/
vows.describe('Division by Zero').addBatch({
    'when dividing a number by zero': {
        topic: function () { return 42 / 0 },

        'we get Infinity': function (topic) {
            assert.equal (topic, Infinity);
        }
    },
    'but when dividing zero by zero': {
        topic: function () { return 0 / 0 },

        'we get a value which': {
            'is not a number': function (topic) {
                assert.isNaN (topic);
            },
            'is not equal to itself': function (topic) {
                assert.notEqual (topic, topic);
            }
        }
    }
}).export(module); // Export the Suite

/*************************************************************************
 *  More involved sample...say the following is in file theGoodThings
 *
 *  the exports have been commented out to use inline for this test
 *************************************************************************/

//exports.Strawberry = function () {
var Strawberry = function () {
    this.color = '#ff0000';
};
//exports.Strawberry.prototype = {
Strawberry.prototype = {
    isTasty: function () { return true }
};

//exports.Banana = function () {
var Banana = function () {
    this.color = '#fff333';
};
//exports.Banana.prototype = {
Banana.prototype = {
    peel: function (callback) {
        process.nextTick(function () {
            //callback(null, new(exports.PeeledBanana));
            callback(null, new(PeeledBanana));
        });
    },
    ///peelSync: function () { return new(exports.PeeledBanana) }
    peelSync: function () { return new(PeeledBanana) }
};

//exports.PeeledBanana = function () {};
var PeeledBanana = function () {};

/*************************************************************************
 *   More involved sample (cont)...
 *   the following would be at the top of the file
 *
 *   var theGoodThings = require('./theGoodThings.js');
 *
 *   var Strawberry   = theGoodThings.Strawberry,
 *   var Banana       = theGoodThings.Banana,
 *   var PeeledBanana = theGoodThings.PeeledBanana;
 *************************************************************************/


vows.describe('The Good Things').addBatch({
    'A strawberry': {
        topic: new(Strawberry),

        'is red': function (strawberry) {
            assert.equal (strawberry.color, '#ff0000');
        },
        'and tasty': function (strawberry) {
            assert.isTrue (strawberry.isTasty());
        }
    },
    'A banana': {
        topic: new(Banana),

        'when peeled *synchronously*': {
            topic: function (banana) {
                return banana.peelSync();
            },
            'returns a `PeeledBanana`': function (result) {
                assert.instanceOf (result, PeeledBanana);
            }
        },
        'when peeled *asynchronously*': {
            topic: function (banana) {
                banana.peel(this.callback);
            },
            'results in a `PeeledBanana`': function (err, result) {
                assert.instanceOf (result, PeeledBanana);
            }
        }
    }
}).export(module); // Export the Suite

/*************************************************************************
 *   Scratch pad area
 *************************************************************************/

function anAsyncFunction (num, callback) {
    callback(null, num, 1, 2, 3);
}

function anAsyncFunctionError2 (callback) {
    throw new Error("dummy exception");
}

function anAsyncFunctionError (callback) {
    x+x;
}

vows.describe('Scratch Pad Area')
    .addBatch({'AnAsyncFunction' : {
        topic: function () {
            anAsyncFunction(10, this.callback);
        },
        'returns 10, 1, 2, 3': function(err, result1, result2, result3, result4) {
            assert.isNull(err);
            assert.equal(result1, 10);
            assert.equal(result2, 1);
            assert.equal(result3, 2);
            assert.equal(result4, 3);
        }
    }})
    .addBatch({'anAsyncFunctionError' : {
        topic: function () {
            anAsyncFunctionError(this.callback);
        },
        'returns err': function(err, result1, result2, result3, result4) {
            //assert.equal(result1, 10);
            console.log(err);
            console.log(result1);
            assert.isNotNull(result1);
            assert.instanceOf(result1, ReferenceError);
            assert.equal(result1.message, "x is not defined");
            assert.equal(result2, undefined);
            assert.equal(result3, undefined);
            assert.equal(result4, undefined);
            assert.isNull(err);
        }
    }})
.export(module);