var providerInMemory = require('../middleware/inMemoryProvider.js').inMemoryProvider;

exports.show = function (req, res) {
    var dataProvider = new providerInMemory();
    dataProvider.loadData(function (error) {

        // determine which gamefilter to start with based on today's date
        dataProvider.getCurrentGameFilter(dataProvider.dummyGameFilters, new Date(), function (error, gameFilter) {

            console.log("gameFilter");
            console.log(gameFilter.gameFilterId);

            dataProvider.getGameResultsByFilter(6, function (error, gameResults) {

                dataProvider.getGameResultsAllUsersByFilter(6, function (error, gameResultsAllUsersFiltered) {
    
                    var gameResultsByUser = reformatGameResultsData(gameResultsAllUsersFiltered);
    
                    console.log("gameResults");
                    console.log(gameResults[0]);
                    console.log("gameResultsByUser");
                    console.log(gameResultsByUser[0]);
                    res.render('gameResultsAllUsersByFilter', { locals: {
                            title: 'Results  ',
                            gameFilters: dataProvider.dummyGameFilters,
                            gameResults: gameResults,
                            gameResultsByUser: gameResultsByUser
                        }
                    });
                });
            });
        });
    });
}

function reformatGameResultsData(gameResultsAllUsersFiltered) {

    var currentUser = "";
    var lastUser = "";
    var isFirstUser = 1;

    var userGameResults = [];
    var userGameResult = {};
    
    var gameResultsByUser = [];
    var gameResultByUser = {};
    
    // the assumption is the gameResultsAllUsersFiltered is ordered by gameFilter (already reduced to one selected), userName, gameId 
    for (var i = 0; i < gameResultsAllUsersFiltered.length; i++) {

        currentUser = gameResultsAllUsersFiltered[i].UserName;

        //console.log(currentUser);

        if (currentUser != lastUser) {
            // this is a new user

            // if this is the first user, do not add it to the array
            if (isFirstUser === 0) {
                gameResultByUser["gameResults"] = userGameResults;
                gameResultsByUser.push(gameResultByUser);
            }
            
            // create a new user row to the gameResultsByUser
            gameResultByUser = {};
            userGameResults = [];
            userGameResult = {};
            
            // add the user to first position
            gameResultByUser["UserName"] = gameResultsAllUsersFiltered[i].UserName;

            // set the pick results
            userGameResult["PickTeamName"] = gameResultsAllUsersFiltered[i].PickTeamName;
            userGameResult["BetPoints"] = gameResultsAllUsersFiltered[i].BetPoints;
            if (gameResultsAllUsersFiltered[i].BetPoints < 0) {
                userGameResult["tdClass"] = "alert alert-error gameResults";
            }
            else if (gameResultsAllUsersFiltered[i].BetPoints > 0) {
                userGameResult["tdClass"] = "alert alert-success gameResults";
            }
            else {
                userGameResult["tdClass"] = "alert gameResults";
            }
            userGameResults.push(userGameResult);
            
            // set the lastUser to this user
            lastUser = currentUser;
            isFirstUser = 0;
        }
        else {
            // this is the same user, just a different game
            
            // set the pick results
            userGameResult = {};
            userGameResult["PickTeamName"] = gameResultsAllUsersFiltered[i].PickTeamName;
            userGameResult["BetPoints"] = gameResultsAllUsersFiltered[i].BetPoints;
            if (gameResultsAllUsersFiltered[i].BetPoints < 0) {
                userGameResult["tdClass"] = "alert alert-error gameResults";
            }
            else if (gameResultsAllUsersFiltered[i].BetPoints > 0) {
                userGameResult["tdClass"] = "alert alert-success gameResults";
            }
            else {
                userGameResult["tdClass"] = "alert gameResults";
            }
            userGameResults.push(userGameResult);
        }
    }
    
    // push the last one
    gameResultByUser["gameResults"] = userGameResults;
    gameResultsByUser.push(gameResultByUser);

    return gameResultsByUser;
}