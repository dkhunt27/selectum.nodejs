

// add a user to the in memory store of users.  If you were looking to use a persistent store, this
// would be the place to start
exports.addUser(),function(mysqldb, source, sourceUser, usersById) {

    console.log("addUser");
    console.log(sourceUser.id);
    console.log(sourceUser.username);
    console.log(arguments.length);

    var user;
    var sqlToFindUser = 'SELECT UserId, FacebookUserId FROM Users WHERE FacebookUserId = ?';
    var sqlToInsertUser = 'INSERT INTO Users (FacebookUserId, FacebookUserName) VALUES(?,?)';

    mysqldb.connect();

    if (arguments.length !== 1) { // non-password-based

        // first check the user table to see if this record has already been added
        mysqldb.query(sqlToFindUser, sourceUser.id, function (err, rows) {
            console.log("sqlToFindUser returned");
            throwErrorIfExists(err);
            console.log(rows.length);

            if (rows.length > 0) {
                // the user does exist, so get his internal user id

                user = usersById[rows[0].UserId] = {id:rows[0].UserId};
                user[source] = sourceUser;
            }

            callback(null, rows);
        });

        console.log("returned row count:");
        //console.log(rows.length);

        if (0 === 0) {
            // the user doesn't exist in the database, so add it

            mysqldb.query(sqlToInsertUser, [sourceUser.id, sourceUser.username], function (err, rows) {
                console.log("sqlToInsertUser returned");
                throwErrorIfExists(err);
                console.log(rows.length);
                console.log(rows);
                console.log(result.insertId);

                console.log("User saved!" + sourceUser.username);

                user = usersById[rows[0].insertId] = {id:rows[0].insertId};
                user[source] = sourceUser;

                callback(null, rows);
            });
        }

        //console.log('The username is: ', rows[0].UserName);
    } else {
        throw new Error("Not implemented!");
    }

    mysqldb.end(function(err){
        console.log("ending conn");
        throwErrorIfExists(err);
        console.log("returning user now");
        return user;
    })
}

function throwErrorIfExists(err){
    if (err) {
        console.log("Error occurred with mysql db connection/query");
        console.log(err.code);
        console.log(err.fatal);
        throw err;
    }
}