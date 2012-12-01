// require('mocha') installed globally
var chai = require('chai');
var assert = chai.assert;
var should = chai.should();
chai.Assertion.includeStack = false;


/*************************************************************************
 *  sample
 *************************************************************************/
describe('Array', function(){
    describe('#indexOf()', function(){
        it('should return -1 when the value is not present', function(){
            assert.equal(-1, [1,2,3].indexOf(5));
            assert.equal(-1, [1,2,3].indexOf(0));
        });
    });
});



/*************************************************************************
 *   Scratch pad area
 *************************************************************************/

function anAsyncFunction (num, callback) {
    callback(null, num, 1, 2, 3);
}

function anAsyncFunctionError2 (num, callback) {
    throw new Error("dummy exception");
    callback(null, num, 1, 2, 3);
}

function anAsyncFunctionError(num, callback) {
    //process.nextTick(function () {
    //    throw new Error("dummy exception")
    //});
    x=x;
    callback(null, num, 1, 2, 3);
}

describe('Scratch Pad Area', function(){
    describe('#anAsyncFunction()', function(){
        it('should return without error', function(done){
            anAsyncFunction(10, function (err, result1, result2, result3, result4){
                should.not.exist(err);
                result1.should.equal(10);
                result2.should.equal(1);
                result3.should.equal(2);
                result4.should.equal(3);

                done();
            });
        });
    });

    // http://stackoverflow.com/questions/9025095/how-can-i-test-uncaught-errors-in-mocha
    describe('#anAsyncFunctionError()', function(){
        it('should return an error', function(done){
            var recordedError = null
            var originalException = process.listeners('uncaughtException').pop(); // temp remove the normal mocha listener
            process.once("uncaughtException", function (error) {
                recordedError = error
            });                                                                   // add err handler to capture expected err
            anAsyncFunctionError (10, function(){});
            process.nextTick(function () {
                process.listeners('uncaughtException').push(originalException);   // add back the normal mocha listener
                assert.equal(recordedError.message, "dummy exception");           // compare err thrown is the expected error
                done()
            });
        });
    });
});