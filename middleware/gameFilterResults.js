var providerInMemory = require('../middleware/inMemoryProvider.js').inMemoryProvider;


exports.show = function (req, res) {
    var dataProvider = new providerInMemory();
    dataProvider.loadData(function (error) {

        // determine which gamefilter to start with based on today's date
        gameFilter = dataProvider.getCurrentGameFilter(dataProvider.dummyGameFilters, new Date(), function (error, gameFilter) {

            console.log(gameFilter);
            dataProvider.getGamesByFilter(6, function (error, games) {

                //console.log(games);

                res.render('selection', { locals: {
                    title: 'Select Your Games.  ',
                    gameFilters: dataProvider.dummyGameFilters,
                    games: games,
                    totals: { possibleBets: games.length, placedBets: 0, availablePoints: 0, spentPoints: 0 },
                    config: { maxBetForAnyOneGame: 5, minSpentPointsForAnyOneWeek: 2, pointsPerBetUnderMinSpentPoints: 1, pointsPerBetAfterMinSpentPoints: 2 }
                }
                });
            });
        });


    });
}

exports.wireUpSocketIOAndSelection = function (io) {
    io.sockets.on('connection',

        function (socket) {

            socket.on('determineMaxPossibleMaxBet',
                function (data) {
                    console.log("determineMaxPossibleMaxBet");
                    maxPossibleMaxBet = calculateMaxPossibleMaxBet(data);
                    console.log("maxPossibleMaxBet:", maxPossibleMaxBet);
                    socket.emit('maxPossibleMaxBetDetermined', { "gameNum": data.gameNum, "maxPossibleMaxBet": maxPossibleMaxBet });
                }
            );


        }
    );
}

function calculateMaxPossibleMaxBet(data) 
{
    console.log("calculateMaxPossibleMaxBet");
    console.log(data);
      
    if (data.availablePoints <= data.requiredMinSpentPoints)
    {
        maxPossibleMaxBet = 1;
    }
    else if (data.availablePoints - data.spentPoints >= data.maxPossibleBet)
    {
        maxPossibleMaxBet = data.maxPossibleBet;
    }
    else
    {
        maxPossibleMaxBet = data.availablePoints - data.spentPoints;
    }

    return maxPossibleMaxBet;
}

function determineMaxBet(data) 
{
    console.log("determineMaxBet");
    console.log(data);

    if (data.yourBet === 0)
    {
        maxBet = 0;
    }
    else if (data.availablePoints <= data.requiredMinSpentPoints)
    {
        maxBet = 1;
    }
    else if (data.yourBet >= data.maxPossibleBet)
    {
        maxBet = data.maxPossibleBet;
    }
    else if (data.yourBet + data.maxPossibleMaxBet >= data.maxPossibleBet)
    {
        maxBet = data.maxPossibleBet;
    }
    else
    {
        maxBet = data.yourBet + data.maxPossibleMaxBet;
    }

    return maxBet;
}