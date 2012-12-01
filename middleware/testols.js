exports.show = function (req, res) {

    console.log("pseudo test framework running...");
/*
    var mysql      = require('mysql');
    var connection = mysql.createConnection({
        database : 'selectum',
        host     : 'localhost',
        user     : 'root',
        password : ''
    });

    connection.connect();

    connection.query('SELECT * FROM USERS', function(err, rows, fields) {
        if (err) throw err;

        console.log(rows);
    });

    connection.query('INSERT INTO USERS (FacebookUserId, FacebookUserName) Values(123,"abc")', function(err, rows, fields) {
        if (err) throw err;

        console.log(rows);
    });

    connection.end();
*/

    /*
    var Sequelize = require('sequelize');
    var sequelize = new Sequelize('selectum', 'root', '', {
        host: 'localhost',
        logging : false
    });

    var User = sequelize.define('Volt', {
            name: { type: Sequelize.STRING, allowNull: false},
            isAdmin: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false }
        })
        , user = User.build({ name: 'Someone' });

    console.log("syncing");

    sequelize.sync({force: true}).on('success', function() {
        console.log("synced");
        user.save().on('success', function(user) {
            console.log("on success");
            console.log("user.isAdmin should be the default value (false): ", user.isAdmin)

            user.updateAttributes({ isAdmin: true }).on('success', function(user) {
                console.log("user.isAdmin was overwritten to true: " + user.isAdmin)
            })
        })
    }).on('failure', function(err) {
            console.log("on failure");
            console.log(err)
        })

    var Teams = sequelize.import(__dirname + "/teams.js")
        , Task      = sequelize.import(__dirname + "/Task")

    Project.hasMany(Task)
    Task.belongsTo(Project)

    sequelize.sync({force: true}).on('success', function() {
        Project
            .create({ name: 'Sequelize', description: 'A nice MySQL ORM for NodeJS' })
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
*/

    var db = require('../middleware/business/db.js');
    //db.BuildTestData();
    console.log(db);

    res.render('test', {title: "Pseudo Test Framework"});
}
