test("calculateGameValuesOnBtnClick:favorite selected when at no bet", function () {

    games = new gameValues();

    // set the games to no bet
    games.gameRowClass = "nobet row class";
    games.hasBet = 0;
    games.maxGameBet = 0;
    games.minGameBet = 0;
    games.yourBetClass = "nobet bet class";
    games.yourBetText = "No Bet";
    games.yourBetValue = 0;

    // set click to favorite
    calculateGameValuesOnBtnClick(games, "favorite row class", "favorite team", "favorite bet class");

    deepEqual(games.gameRowClass, "favorite row class", "gameRowClass");
    deepEqual(games.hasBet, 1, "hasBet");
    deepEqual(games.maxGameBet, 1, "games.maxGameBet");
    deepEqual(games.minGameBet, 1, "minGameBet");
    deepEqual(games.yourBetClass, "favorite bet class", "yourBetClass");
    deepEqual(games.yourBetText, "favorite team", "yourBetText");
    deepEqual(games.yourBetValue, 1, "yourBetValue");
})

test("calculateGameValuesOnBtnClick:favorite selected when underdog betting 1", function () {

    games = new gameValues();

    // set the games to no bet
    games.gameRowClass = "underdog row class";
    games.hasBet = 1;
    games.maxGameBet = 1;
    games.minGameBet = 1;
    games.yourBetClass = "underdog bet class";
    games.yourBetText = "underdog team";
    games.yourBetValue = 1;

    // set click to favorite
    calculateGameValuesOnBtnClick(games, "favorite row class", "favorite team", "favorite bet class");

    deepEqual(games.gameRowClass, "favorite row class", "gameRowClass");
    deepEqual(games.hasBet, 1, "hasBet");
    deepEqual(games.maxGameBet, 1, "games.maxGameBet");
    deepEqual(games.minGameBet, 1, "minGameBet");
    deepEqual(games.yourBetClass, "favorite bet class", "yourBetClass");
    deepEqual(games.yourBetText, "favorite team", "yourBetText");
    deepEqual(games.yourBetValue, 1, "yourBetValue");
})

test("calculateGameValuesOnBtnClick:favorite selected when underdog betting 3", function () {

    games = new gameValues();

    // set the games to no bet
    games.gameRowClass = "underdog row class";
    games.hasBet = 1;
    games.maxGameBet = 5;
    games.minGameBet = 1;
    games.yourBetClass = "underdog bet class";
    games.yourBetText = "underdog team";
    games.yourBetValue = 3;

    // set click to favorite
    calculateGameValuesOnBtnClick(games, "favorite row class", "favorite team", "favorite bet class");

    deepEqual(games.gameRowClass, "favorite row class", "gameRowClass");
    deepEqual(games.hasBet, 1, "hasBet");
    deepEqual(games.maxGameBet, 1, "games.maxGameBet");
    deepEqual(games.minGameBet, 1, "minGameBet");
    deepEqual(games.yourBetClass, "favorite bet class", "yourBetClass");
    deepEqual(games.yourBetText, "favorite team", "yourBetText");
    deepEqual(games.yourBetValue, 1, "yourBetValue");
})

test("calculateGameValuesOnBtnClick:underdog selected when at no bet", function () {

    games = new gameValues();

    // set the games to no bet
    games.gameRowClass = "nobet row class";
    games.hasBet = 0;
    games.maxGameBet = 0;
    games.minGameBet = 0;
    games.yourBetClass = "nobet bet class";
    games.yourBetText = "No Bet";
    games.yourBetValue = 0;

    // set click to underdog
    calculateGameValuesOnBtnClick(games, "underdog row class", "underdog team", "underdog bet class");

    deepEqual(games.gameRowClass, "underdog row class", "gameRowClass");
    deepEqual(games.hasBet, 1, "hasBet");
    deepEqual(games.maxGameBet, 1, "games.maxGameBet");
    deepEqual(games.minGameBet, 1, "minGameBet");
    deepEqual(games.yourBetClass, "underdog bet class", "yourBetClass");
    deepEqual(games.yourBetText, "underdog team", "yourBetText");
    deepEqual(games.yourBetValue, 1, "yourBetValue");
})

test("calculateGameValuesOnBtnClick:underdog selected when favorite betting 1", function () {

    games = new gameValues();

    // set the games to no bet
    games.gameRowClass = "favorite row class";
    games.hasBet = 1;
    games.maxGameBet = 1;
    games.minGameBet = 1;
    games.yourBetClass = "favorite bet class";
    games.yourBetText = "favorite team";
    games.yourBetValue = 1;

    // set click to underdog
    calculateGameValuesOnBtnClick(games, "underdog row class", "underdog team", "underdog bet class");

    deepEqual(games.gameRowClass, "underdog row class", "gameRowClass");
    deepEqual(games.hasBet, 1, "hasBet");
    deepEqual(games.maxGameBet, 1, "games.maxGameBet");
    deepEqual(games.minGameBet, 1, "minGameBet");
    deepEqual(games.yourBetClass, "underdog bet class", "yourBetClass");
    deepEqual(games.yourBetText, "underdog team", "yourBetText");
    deepEqual(games.yourBetValue, 1, "yourBetValue");
})

test("calculateGameValuesOnBtnClick:underdog selected when favorite betting 3", function () {

    games = new gameValues();

    // set the games to no bet
    games.gameRowClass = "favorite row class";
    games.hasBet = 1;
    games.maxGameBet = 5;
    games.minGameBet = 1;
    games.yourBetClass = "favorite bet class";
    games.yourBetText = "favorite team";
    games.yourBetValue = 3;

    // set click to underdog
    calculateGameValuesOnBtnClick(games, "underdog row class", "underdog team", "underdog bet class");

    deepEqual(games.gameRowClass, "underdog row class", "gameRowClass");
    deepEqual(games.hasBet, 1, "hasBet");
    deepEqual(games.maxGameBet, 1, "games.maxGameBet");
    deepEqual(games.minGameBet, 1, "minGameBet");
    deepEqual(games.yourBetClass, "underdog bet class", "yourBetClass");
    deepEqual(games.yourBetText, "underdog team", "yourBetText");
    deepEqual(games.yourBetValue, 1, "yourBetValue");
})

test("calculateGameValuesOnBtnClick:no bet selected when at favorite betting 1", function () {

    games = new gameValues();

    // set the games to fav
    games.gameRowClass = "favorite row class";
    games.hasBet = 1;
    games.maxGameBet = 1;
    games.minGameBet = 1;
    games.yourBetClass = "favorite bet class";
    games.yourBetText = "favorite team";
    games.yourBetValue = 1;

    // set the games to no bet
    calculateGameValuesOnBtnClick(games, "nobet row class", "No Bet", "nobet bet class");

    deepEqual(games.gameRowClass, "nobet row class", "gameRowClass");
    deepEqual(games.hasBet, 0, "hasBet");
    deepEqual(games.maxGameBet, 0, "gamesmaxGameBet");
    deepEqual(games.minGameBet, 0, "minGameBet");
    deepEqual(games.yourBetClass, "nobet bet class", "yourBetClass");
    deepEqual(games.yourBetText, "No Bet", "yourBetText");
    deepEqual(games.yourBetValue, 0, "yourBetValue");
})

test("calculateGameValuesOnBtnClick:no bet selected when at favorite betting 3", function () {

    games = new gameValues();

    // set the games to fav
    games.gameRowClass = "favorite row class";
    games.hasBet = 1;
    games.maxGameBet = 3;
    games.minGameBet = 1;
    games.yourBetClass = "favorite bet class";
    games.yourBetText = "favorite team";
    games.yourBetValue = 3;

    // set click to no bet
    calculateGameValuesOnBtnClick(games, "nobet row class", "No Bet", "nobet bet class");

    deepEqual(games.gameRowClass, "nobet row class", "gameRowClass");
    deepEqual(games.hasBet, 0, "hasBet");
    deepEqual(games.maxGameBet, 0, "gamesmaxGameBet");
    deepEqual(games.minGameBet, 0, "minGameBet");
    deepEqual(games.yourBetClass, "nobet bet class", "yourBetClass");
    deepEqual(games.yourBetText, "No Bet", "yourBetText");
    deepEqual(games.yourBetValue, 0, "yourBetValue");
})

test("calculateTotalValues:all 0", function () {

    config = new configValues();
    
    config.maxBetForAnyOneGame = 5;
    config.minSpentPointsForAnyOneWeek = 2;
    config.pointsPerBetUnderMinSpentPoints = 1;
    config.pointsPerBetAfterMinSpentPoints = 2;

    totals = new totalValues();
    gameList = [];

    gameList.push({hasBet:0, yourBetValue:0, minGameBet:0, maxGameBet:0, yourBetClass:"nobet bet class", yourBetText:"No Bet"});
    gameList.push({hasBet:0, yourBetValue:0, minGameBet:0, maxGameBet:0, yourBetClass:"nobet bet class", yourBetText:"No Bet"});
    gameList.push({hasBet:0, yourBetValue:0, minGameBet:0, maxGameBet:0, yourBetClass:"nobet bet class", yourBetText:"No Bet"});
    gameList.push({hasBet:0, yourBetValue:0, minGameBet:0, maxGameBet:0, yourBetClass:"nobet bet class", yourBetText:"No Bet"});
    gameList.push({hasBet:0, yourBetValue:0, minGameBet:0, maxGameBet:0, yourBetClass:"nobet bet class", yourBetText:"No Bet"});

    totals.calculateTotalValues(gameList, config);

    deepEqual(totals.placedBets, 0, "placedBets");
    deepEqual(totals.availablePoints, 2, "availablePoints");
    deepEqual(totals.spentPoints, 0, "spentPoints");
})

test("calculateTotalValues:1 games with 1 bet", function () {

    config = new configValues();
    
    config.maxBetForAnyOneGame = 5;
    config.minSpentPointsForAnyOneWeek = 2;
    config.pointsPerBetUnderMinSpentPoints = 1;
    config.pointsPerBetAfterMinSpentPoints = 2;

    totals = new totalValues();
    gamesList = [];

    gamesList.push({hasBet:0, yourBetValue:0});
    gamesList.push({hasBet:0, yourBetValue:0});
    gamesList.push({hasBet:1, yourBetValue:1});
    gamesList.push({hasBet:0, yourBetValue:0});
    gamesList.push({hasBet:0, yourBetValue:0});

    totals.calculateTotalValues(gamesList, config);

    deepEqual(totals.placedBets, 1, "placedBets");
    deepEqual(totals.availablePoints, 2, "availablePoints");
    deepEqual(totals.spentPoints, 1, "spentPoints");
})

test("calculateTotalValues:2 games with 1 bet", function () {

    config = new configValues();
    
    config.maxBetForAnyOneGame = 5;
    config.minSpentPointsForAnyOneWeek = 2;
    config.pointsPerBetUnderMinSpentPoints = 1;
    config.pointsPerBetAfterMinSpentPoints = 2;

    totals = new totalValues();
    gamesList = [];

    gamesList.push({hasBet:0, yourBetValue:0});
    gamesList.push({hasBet:0, yourBetValue:0});
    gamesList.push({hasBet:1, yourBetValue:1});
    gamesList.push({hasBet:0, yourBetValue:0});
    gamesList.push({hasBet:1, yourBetValue:1});

    totals.calculateTotalValues(gamesList, config);

    deepEqual(totals.placedBets, 2, "placedBets");
    deepEqual(totals.availablePoints, 2, "availablePoints");
    deepEqual(totals.spentPoints, 2, "spentPoints");
})

test("calculateTotalValues:3 games with 1 bet", function () {

    config = new configValues();
    
    config.maxBetForAnyOneGame = 5;
    config.minSpentPointsForAnyOneWeek = 2;
    config.pointsPerBetUnderMinSpentPoints = 1;
    config.pointsPerBetAfterMinSpentPoints = 2;

    totals = new totalValues();
    gamesList = [];

    gamesList.push({hasBet:1, yourBetValue:1});
    gamesList.push({hasBet:1, yourBetValue:1});
    gamesList.push({hasBet:1, yourBetValue:1});
    gamesList.push({hasBet:0, yourBetValue:0});
    gamesList.push({hasBet:0, yourBetValue:0});

    totals.calculateTotalValues(gamesList, config);

    deepEqual(totals.placedBets, 3, "placedBets");
    deepEqual(totals.availablePoints, 4, "availablePoints");
    deepEqual(totals.spentPoints, 3, "spentPoints");
})

test("calculateTotalValues:5 games with 1 bet", function () {

    config = new configValues();
    
    config.maxBetForAnyOneGame = 5;
    config.minSpentPointsForAnyOneWeek = 2;
    config.pointsPerBetUnderMinSpentPoints = 1;
    config.pointsPerBetAfterMinSpentPoints = 2;

    totals = new totalValues();
    gamesList = [];

    gamesList.push({hasBet:1, yourBetValue:1});
    gamesList.push({hasBet:1, yourBetValue:1});
    gamesList.push({hasBet:1, yourBetValue:1});
    gamesList.push({hasBet:1, yourBetValue:1});
    gamesList.push({hasBet:1, yourBetValue:1});

    totals.calculateTotalValues(gamesList, config);

    deepEqual(totals.placedBets, 5, "placedBets");
    deepEqual(totals.availablePoints, 8, "availablePoints");
    deepEqual(totals.spentPoints, 5, "spentPoints");
})

test("calculateTotalValues:5 games with 3-1 bet 2-2 bet", function () {

    config = new configValues();
    
    config.maxBetForAnyOneGame = 5;
    config.minSpentPointsForAnyOneWeek = 2;
    config.pointsPerBetUnderMinSpentPoints = 1;
    config.pointsPerBetAfterMinSpentPoints = 2;

    totals = new totalValues();
    gamesList = [];

    gamesList.push({hasBet:1, yourBetValue:2});
    gamesList.push({hasBet:1, yourBetValue:2});
    gamesList.push({hasBet:1, yourBetValue:1});
    gamesList.push({hasBet:1, yourBetValue:1});
    gamesList.push({hasBet:1, yourBetValue:1});

    totals.calculateTotalValues(gamesList, config);

    deepEqual(totals.placedBets, 5, "placedBets");
    deepEqual(totals.availablePoints, 8, "availablePoints");
    deepEqual(totals.spentPoints, 7, "spentPoints");
})

test("calculateTotalValues:5 games with 4-1 bet 1-4 bet", function () {

    config = new configValues();
    
    config.maxBetForAnyOneGame = 5;
    config.minSpentPointsForAnyOneWeek = 2;
    config.pointsPerBetUnderMinSpentPoints = 1;
    config.pointsPerBetAfterMinSpentPoints = 2;

    totals = new totalValues();
    gamesList = [];

    gamesList.push({hasBet:1, yourBetValue:4});
    gamesList.push({hasBet:1, yourBetValue:1});
    gamesList.push({hasBet:1, yourBetValue:1});
    gamesList.push({hasBet:1, yourBetValue:1});
    gamesList.push({hasBet:1, yourBetValue:1});

    totals.calculateTotalValues(gamesList, config);

    deepEqual(totals.placedBets, 5, "placedBets");
    deepEqual(totals.availablePoints, 8, "availablePoints");
    deepEqual(totals.spentPoints, 8, "spentPoints");
})

test("calculateMaxPossibleBetForAnyGameThisWeek", function () {

    // totals.availablePoints < config.minSpentPointsForAnyOneWeek
    // maxBetForAnyGameThisWeek = 1

    config = new configValues();
    totals = new totalValues();

    config.minSpentPointsForAnyOneWeek = 5;
    totals.availablePoints = 2;

    maxBetForAnyGameThisWeek = calculateMaxPossibleBetForAnyGameThisWeek(totals, config);

    deepEqual(maxBetForAnyGameThisWeek, 1, "maxBetForAnyGameThisWeek1");

    // totals.availablePoints = config.minSpentPointsForAnyOneWeek
    // maxBetForAnyGameThisWeek = 1

    config.minSpentPointsForAnyOneWeek = 5;
    totals.availablePoints = 5;

    maxBetForAnyGameThisWeek = calculateMaxPossibleBetForAnyGameThisWeek(totals, config);

    deepEqual(maxBetForAnyGameThisWeek, 1, "maxBetForAnyGameThisWeek2");

    // totals.availablePoints > config.minSpentPointsForAnyOneWeek
    // totals.availablePoints - totals.spentPoints > config.maxBetForAnyOneGame  (one point greater)
    // maxBetForAnyGameThisWeek = config.maxBetForAnyOneGame

    config.minSpentPointsForAnyOneWeek = 5;
    totals.availablePoints = 6;
    totals.spentPoints = 3;
    config.maxBetForAnyOneGame = 2;

    maxBetForAnyGameThisWeek = calculateMaxPossibleBetForAnyGameThisWeek(totals, config);

    deepEqual(maxBetForAnyGameThisWeek, 2, "maxBetForAnyGameThisWeek3");

    // totals.availablePoints > config.minSpentPointsForAnyOneWeek
    // totals.availablePoints - totals.spentPoints > config.maxBetForAnyOneGame (more than one point greater)
    // maxBetForAnyGameThisWeek = config.maxBetForAnyOneGame

    config.minSpentPointsForAnyOneWeek = 5;
    totals.availablePoints = 10;
    totals.spentPoints = 5;
    config.maxBetForAnyOneGame = 4;

    maxBetForAnyGameThisWeek = calculateMaxPossibleBetForAnyGameThisWeek(totals, config);

    deepEqual(maxBetForAnyGameThisWeek, 4, "maxBetForAnyGameThisWeek4");

    // totals.availablePoints > config.minSpentPointsForAnyOneWeek
    // totals.availablePoints - totals.spentPoints = config.maxBetForAnyOneGame
    // maxBetForAnyGameThisWeek = config.maxBetForAnyOneGame

    config.minSpentPointsForAnyOneWeek = 5;
    totals.availablePoints = 10;
    totals.spentPoints = 6;
    config.maxBetForAnyOneGame = 4;

    maxBetForAnyGameThisWeek = calculateMaxPossibleBetForAnyGameThisWeek(totals, config);

    deepEqual(maxBetForAnyGameThisWeek, 4, "maxBetForAnyGameThisWeek5");

    // totals.availablePoints > config.minSpentPointsForAnyOneWeek
    // totals.availablePoints - totals.spentPoints < config.maxBetForAnyOneGame
    // maxBetForAnyGameThisWeek = totals.availablePoints - totals.spentPoints + 1

    config.minSpentPointsForAnyOneWeek = 5;
    totals.availablePoints = 10;
    totals.spentPoints = 8;
    config.maxBetForAnyOneGame = 4;

    maxBetForAnyGameThisWeek = calculateMaxPossibleBetForAnyGameThisWeek(totals, config);

    deepEqual(maxBetForAnyGameThisWeek, 3, "maxBetForAnyGameThisWeek6");
})

test("calculateMaxBetForThisGame", function () {

    // yourBetValue === 0
    // maxGameBet = 0

    games = new gameValues();
    maxBetForAnyGameThisWeek = 5;

    games.yourBetValue = 0;

    calculateMaxBetForThisGame(games, maxBetForAnyGameThisWeek);

    deepEqual(games.maxGameBet, 0, "maxGameBet");

    // yourBetValue > 0
    // games.yourBetValue > maxBetForAnyGameThisWeek
    // games.maxGameBet = games.yourBetValue;

    games2 = new gameValues();
    maxBetForAnyGameThisWeek = 3;

    games2.yourBetValue = 5;

    calculateMaxBetForThisGame(games2, maxBetForAnyGameThisWeek);

    deepEqual(games2.maxGameBet, 5, "maxGameBet");

    // yourBetValue > 0
    // games.yourBetValue = maxBetForAnyGameThisWeek
    // games.maxGameBet = maxBetForAnyGameThisWeek;

    games3 = new gameValues();
    maxBetForAnyGameThisWeek = 5;

    games3.yourBetValue = 5;

    calculateMaxBetForThisGame(games3, maxBetForAnyGameThisWeek);

    deepEqual(games3.maxGameBet, 5, "maxGameBet");

    // yourBetValue > 0
    // games.yourBetValue < maxBetForAnyGameThisWeek
    // games.maxGameBet = maxBetForAnyGameThisWeek;

    games4 = new gameValues();
    maxBetForAnyGameThisWeek = 5;

    games4.yourBetValue = 3;

    calculateMaxBetForThisGame(games4, maxBetForAnyGameThisWeek);

    deepEqual(games4.maxGameBet, 5, "maxGameBet");
})
