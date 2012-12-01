
/**
* MODULE DEPENDENCIES
* -------------------------------------------------------------------------------------------------
* include any modules you will use through out the file
**/

var express = require('express')
  , less = require('less')
  , connect = require('connect')
  , everyauth = require('everyauth')
  , nconf = require('nconf')
  , Recaptcha = require('recaptcha').Recaptcha;

/**
* CONFIGURATION
* -------------------------------------------------------------------------------------------------
* load configuration settings from ENV, then settings.json.  Contains keys for OAuth logins. See 
* settings.example.json.  
**/
nconf.env().file({file: 'settings.json'});


/**
 * MYSQL CONFIGURATION
 * -------------------------------------------------------------------------------------------------
 *
 **/
//    var mysql = require('mysql');
//var connection = mysql.createConnection({
//    //host     : '127.0.0.1',
//    user     : 'root',
//    password : ''
//});

/*
 var mysql = require('mysql');
 var mysqldb = mysql.createClient({
 host     : 'localhost',
 port     : 3306,
 user     : 'root',
 password : '',
 database : 'selectum',
 debug : false
 });

 var userMgmt = require('./middleware/userManagement0.9.js');

 // test the database connection
 mysqldb.query("SELECT 'Successfully connected to mysql db' AS DBConnectionTest", function(err, rows) {
 if (err) {
 console.log("Error occurred trying to connect to mysql db");
 console.log(err.code);
 console.log(err.fatal);
 throw err;
 }

 console.log(rows[0].DBConnectionTest);
 });
 */

/**
 * PATIO CONFIGURATION
 * -------------------------------------------------------------------------------------------------
 *
 **/
var patio = require("patio");
var helpers = require("./models/helpers.js");
var models = require("./models/models.js");

patio.camelize = true;
patio.connect("mysql://nodejs:nodejs@localhost:3306/selectum?maxConnections=50&minConnections=10");
patio.configureLogging();
patio.LOGGER.level = "ERROR";

 //sync the model so it can be used
 patio.syncModels().then(function(){

 }, errorHandler);


function errorHandler(error) {
    console.log(error);
    patio.disconnect();
};

/**
* EVERYAUTH AUTHENTICATION
* -------------------------------------------------------------------------------------------------
* allows users to log in and register using OAuth services
**/

everyauth.debug = true;

// Configure Facebook auth
var usersById = {},
    nextUserId = 0,
    usersByFacebookId = {};
   // usersByTwitId = {},
   // usersByLogin = {
   //     'user@example.com': addUser({ email: 'user@example.com', password: 'azure'})
   // };

everyauth.
    everymodule.
    findUserById(function (id, callback) {
	    callback(null, usersById[id]);
    });


/**
* FACEBOOK AUTHENTICATION
* -------------------------------------------------------------------------------------------------
* uncomment this section if you want to enable facebook authentication.  To use this, you will need
* to get a facebook application Id and Secret, and add those to settings.json.  See:
* http://developers.facebook.com/
**/
/*
everyauth.
    facebook.
    appId(nconf.get('facebook:applicationId')).
    appSecret(nconf.get('facebook:applicationSecret')).
    findOrCreateUser(
	function(session, accessToken, accessTokenExtra, fbUserMetadata){
	    return usersByFacebookId[fbUserMetadata.claimedIdentifier] || 
		(usersByFacebookId[fbUserMetadata.claimedIdentifier] =
            userMgmt.addUser(mysqldb, 'facebook', fbUserMetadata, usersById));
	}).
    redirectPath('/');
*/

/**
* TWITTER AUTHENTICATION
* -------------------------------------------------------------------------------------------------
* uncomment this section if you want to enable twitter authentication.  To use this, you will need
* to get a twitter key and secret, and add those to settings.json.  See:
* https://dev.twitter.com/
**/

//everyauth
//  .twitter
//    .consumerKey(nconf.get('twitter:consumerKey'))
//    .consumerSecret(nconf.get('twitter:consumerSecret'))
//    .findOrCreateUser( function (sess, accessToken, accessSecret, twitUser) {
//      return usersByTwitId[twitUser.id] || (usersByTwitId[twitUser.id] = addUser('twitter', twitUser));
//    })
//    .redirectPath('/');



/**
* USERNAME & PASSWORD AUTHENTICATION
* -------------------------------------------------------------------------------------------------
* this section provides basic in-memory username and password authentication
**/

everyauth
  .password
    .loginWith('email')
    .getLoginPath('/login')
    .postLoginPath('/login')
    .loginView('account/login')
    .loginLocals(function(req, res, done) {
        setTimeout(function() {
            done(null, {
                title: 'login.  '
            });
        }, 200);
    })
    .authenticate(function(login, password) {
        var errors = [];
        if(!login) errors.push('Missing login');
        if(!password) errors.push('Missing password');
        if(errors.length) return errors;
        var user = usersByLogin[login];
        if(!user) return ['Login failed'];
        if(user.password !== password) return ['Login failed'];
        return user;
    })
    .getRegisterPath('/register')
    .postRegisterPath('/register')
    .registerView('account/register')
    .registerLocals(function(req, res, done) {
        setTimeout(function() {
            done(null, {
                title: 'Register.  ',
                recaptcha_form: (new Recaptcha(nconf.get('recaptcha:publicKey'), nconf.get('recaptcha:privateKey'))).toHTML()
            });
        }, 200);
    })
    .extractExtraRegistrationParams(function(req) {
        return {
            confirmPassword: req.body.confirmPassword,
            data: {
                remoteip: req.connection.remoteAddress,
                challenge: req.body.recaptcha_challenge_field,
                response: req.body.recaptcha_response_field
            }
        }
    })
    .validateRegistration(function(newUserAttrs, errors) {
        var login = newUserAttrs.login;
        var confirmPassword = newUserAttrs.confirmPassword;
        if(!confirmPassword) errors.push('Missing password confirmation')
        if(newUserAttrs.password != confirmPassword) errors.push('Passwords must match');
        if(usersByLogin[login]) errors.push('Login already taken');

        // validate the recaptcha 
        var recaptcha = new Recaptcha(nconf.get('recaptcha:publicKey'), nconf.get('recaptcha:privateKey'), newUserAttrs.data);
        recaptcha.verify(function(success, error_code) {
            if(!success) {
                errors.push('Invalid recaptcha - please try again');
            }
        });
        return errors;
    })
    .registerUser(function(newUserAttrs) {
        var login = newUserAttrs[this.loginKey()];
        return usersByLogin[login] = userMgmt.addUser(newUserAttrs);
    })
    .loginSuccessRedirect('/')
    .registerSuccessRedirect('/');


var app = module.exports = express.createServer();
everyauth.helpExpress(app);

/**
* CONFIGURATION
* -------------------------------------------------------------------------------------------------
* set up view engine (jade), css preprocessor (less), and any custom middleware (errorHandler)
**/

app.configure(function() {
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    //app.use(require('./middleware/locals'));
    app.use(express.cookieParser());
    app.use(express.session({ secret: 'selectum d0u8l3 d0wn' }));
    app.use(everyauth.middleware());
    app.use(express.compiler({ src: __dirname + '/public', enable: ['less'] }));
    app.use(connect.static(__dirname + '/public'));
    app.use(app.router);
});

/**
* ERROR MANAGEMENT
* -------------------------------------------------------------------------------------------------
* error management - instead of using standard express / connect error management, we are going
* to show a custom 404 / 500 error using jade and the middleware errorHandler (see ./middleware/errorHandler.js)
**/
var errorOptions = { dumpExceptions: true, showStack: true }
app.configure('development', function() { });
app.configure('production', function() {
    errorOptions = {};
});
app.use(require('./middleware/errorHandler')(errorOptions));


/**
* DATA PERSISTANCE
* -------------------------------------------------------------------------------------------------
**/
//var InMemoryProvider = require('./middleware/inMemoryProvider.js');
//var dataProvider = new InMemoryProvider();
//console.log("a");
//console.log(dataProvider);
//console.log("b");

/**
* ROUTING
* -------------------------------------------------------------------------------------------------
* include a route file for each major area of functionality in the site
**/

require('./routes/home')(app);
require('./routes/account')(app);

// Global Routes - this should be last!
require('./routes/global')(app);



/**
* CHAT / SOCKET.IO 
* -------------------------------------------------------------------------------------------------
* this shows a basic example of using socket.io to orchestrate chat
**/

// socket.io configuration
var buffer = [];
var io = require('socket.io').listen(app);


io.configure(function() {
    io.set("transports", ["xhr-polling"]);
    io.set("polling duration", 100);
});

io.sockets.on('connection', function(socket) {
    socket.emit('messages', { buffer: buffer });
    socket.on('setname', function(name) {
        socket.set('name', name, function() {
            socket.broadcast.emit('announcement', { announcement: name + ' connected' });
        });
    });
    socket.on('message', function(message) {
        socket.get('name', function(err, name) {
            var msg = { message: [name, message] };
            buffer.push(msg);
            if(buffer.length > 15) buffer.shift();
            socket.broadcast.emit('message', msg);
        })
    });
    socket.on('disconnect', function() {
        socket.get('name', function(err, name) {
            socket.broadcast.emit('announcement', { announcement: name + ' disconnected' });
        })
    })
});

/**
* GAME SELECTION / SOCKET.IO
* -------------------------------------------------------------------------------------------------
**/
var selection = require('./middleware/selection.js');
selection.wireUpSocketIOAndSelection(io);


/**
* RUN
* -------------------------------------------------------------------------------------------------
* this starts up the server on the given port
**/


app.listen(process.env.PORT || 3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);

