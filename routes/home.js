var selection = require('../middleware/selection.js');
var test = require('../middleware/test3.js');
var gameResultsAllUsersByFilter = require('../middleware/gameResultsAllUsersByFilter.js');

module.exports = function (app) {

    // home page
    app.get('/', function (req, res) {
        //res.render('index', { title: 'Home Page.  ' })
        //console.log(dbProvider);
        //res.render('selection', { title: 'Select Your Games.  ' });
        selection.show(req, res);
    });

    // selection page
    app.get('/selection', function (req, res) {
        selection.show(req, res);
    });

    // selection page
    app.get('/test', function (req, res) {
        test.show(req, res);
    });

    // selection page
    app.get('/gameresultsallusersbyfilter', function (req, res) {
        gameResultsAllUsersByFilter.show(req, res);
    });

    // chat area
    app.get('/chat', function (req, res) {
        res.render('chat', { title: 'Chat with Me!  ' });
    });

    // about page
    app.get('/about', function (req, res) {
        res.render('about', { title: 'About Me.  ' });
    });

    // qunit test page
    app.get('/qunit', function (req, res) {
        res.render('qunit', { title: 'QUnit Testing.  ' });
    });
}
