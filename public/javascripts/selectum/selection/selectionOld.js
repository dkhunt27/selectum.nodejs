function setYourBetItems(game, yourBet, maxBet) {
 
    if (yourBet > 0)
    {
    minBet = 1;
    }
    else
    {
    minBet = 0;
    }

    setYourBetRadio(game, maxBet);
    setYourBet(game, yourBet);
    setYourBetMinBet(game, minBet);
    setYourBetMaxBet(game, maxBet);
}

function btnFavoriteUnderdogOnClick(game, yourSelectionText, yourSelectionClass, gameRowClass) {
    myLog("btnFavoriteUnderdogOnClick");
    //logButtonClickInputs(game, yourSelectionText, yourSelectionClass, gameRowClass);

    rowHasBet = getRowHasBet(game);
    updateRowBasedOnSelection(game, yourSelectionText, yourSelectionClass, gameRowClass)

    if (rowHasBet === "0")
    {
        myLog("setting bet to 1");

        totals = new selectionTotals();
        //logButtonClickOtherVars(totals.placedBets, totals.availablePoints, totals.spentPoints, totals.requiredMinSpentPoints, totals.maxPossibleBet);

        updateRowBasedOnBetChange(game, totals.placedBets + 1, 1, 1, 1, totals.requiredMinSpentPoints, totals.availablePoints + 2, totals.spentPoints + 1);

        //if (totals.placedBets >= totals.requiredMinSpentPoints)
    }

    for (i=0; i<totals.maxPossibleBet; i++)
    {
        recalculateYourAvailableBets(i);
    }
}

function btnNoBetOnClick(game, yourSelectionText, yourSelectionClass, gameRowClass) {
    myLog("btnNoBetOnClick");
    //logButtonClickInputs(game, yourSelectionText, yourSelectionClass, gameRowClass);

    rowHasBet = getRowHasBet(game);
    updateRowBasedOnSelection(game, yourSelectionText, yourSelectionClass, gameRowClass)

    if (rowHasBet === "1")
    {
        myLog("setting bet to 0");

        totals = new selectionTotals();
        //logButtonClickOtherVars(totals.placedBets, totals.availablePoints, totals.spentPoints, totals.requiredMinSpentPoints, totals.maxPossibleBet);

        updateRowBasedOnBetChange(game, totals.placedBets - 1, 0, 0, 0, totals.requiredMinSpentPoints, totals.availablePoints - 2, totals.spentPoints - 1);
    }  

    for (i=0; i<totals.maxPossibleBet; i++)
    {
        recalculateYourAvailableBets(i);
    }
}

function updateRowBasedOnSelection(game, yourSelectionText, yourSelectionClass, gameRowClass) {
    
    // set your selection and row based on what was selected
    setYourSelection(game, yourSelectionClass, yourSelectionText);
    setGameRowClassName(game, gameRowClass);
}

function updateRowBasedOnBetChange(game, placedBet, rowHasBet, yourBet, maxBet, requiredMinSpentPoints, availablePoints, spentPoints) {
    myLog("updateRowBasedOnBetChange");
    logUpdateRowBasedOnBetChange(game, placedBet, rowHasBet, yourBet, maxBet, requiredMinSpentPoints, availablePoints, spentPoints);

    setPlacedBets(placedBet);
    setRowHasBet(game, rowHasBet);
    setYourBetItems(game, yourBet, maxBet);

    if (placedBets > requiredMinSpentPoints)
    {
        setAvailablePoints(availablePoints);
    }

    setSpentPoints(spentPoints);
}


function calculateGameValuesOnBtnClick(games, totals, gameRowClass, yourBetText, yourBetClass) {

    // if removing a bet and the row doesnt have any bets or if adding a bet and the row already has bet...do nothing

    if (yourBetText != "No Bet" && games.hasBet === false)
    {  // if adding a bet and the row doesnt have a bet

        // add 1 to placed bet total
        totals.placedBets = totals.placedBets + 1;

        // add 1 to spent points total
        totals.spentPoints = totals.spentPoints + 1;

        // add additional points to total points...if applicable
        if (totals.placedBets > totals.minSpentPoints)
        {
            totals.availablePoints = totals.availablePoints + 2;
        }

        // set row has a bet
        games.hasBet = true;

        // set the items based on the button click
        games.gameRowClass = gameRowClass;
        games.yourBetText = yourBetText;
        games.yourBetClass = yourBetClass;

        // set your bet to 1
        games.yourBetValue = 1;

        // set the min bet to 1
        games.minGameBet = 1;

        // set max game bet to 1 (this will be recalculated for all rows next)
        games.maxGameBet = 1;


    }
    else if (yourBetText === "No Bet" && games.hasBet === true)
    {  // if removing a bet and the row has a bet

        // remove 1 from placed bet total
        totals.placedBets = totals.placedBets - 1;

        // remove your bet from spent points total
        totals.spentPoints = totals.spentPoints - games.yourBetValue;

        // remove additional points from total points...if applicable
        if (totals.placedBets >= totals.minSpentPoints)
        {
            totals.availablePoints = totals.availablePoints - 2;
        }        

        // set row doesnt have a bet
        games.hasBet = false;

        // set the items based on the button click
        games.gameRowClass = gameRowClass;
        games.yourBetText = yourBetText;
        games.yourBetClass = yourBetClass;

        // set your bet to 0
        games.yourBetValue = 0;

        // set min bet to 0
        games.minGameBet = 0;

        // set max bet to 0
        games.maxGameBet = 0;
    }
    
    // loop through all games and determine and set max bet
}

function determineMaxBet(yourBet, availablePoints, requiredMinSpentPoints, maxPossibleBet, maxPossibleMaxBet) {
    myLog("determineMaxBet");
      
    logDetermineMaxBetInputs(yourBet, availablePoints, requiredMinSpentPoints, spentPoints, maxPossibleBet);

    if (yourBet === 0)
    {
    maxBet = 0;
    }
    else if (availablePoints <= requiredMinSpentPoints)
    {
    maxBet = 1;
    }
    else if (yourBet >= maxPossibleBet)
    {
    maxBet = maxPossibleBet;
    }
    else if (yourBet + maxPossibleMaxBet >= maxPossibleBet)
    {
    maxBet = maxPossibleBet;
    }
    else
    {
    maxBet = yourBet + maxPossibleMaxBet;
    }

    return maxBet;
}

function determineMaxPossibleMaxBet(availablePoints, requiredMinSpentPoints, spentPoints, maxPossibleBet) {
    myLog("determineMaxPossibleMaxBet");
      
    logDetermineMaxPossibleMaxBetInputs(availablePoints, requiredMinSpentPoints, spentPoints, maxPossibleBet);

    if (availablePoints <= requiredMinSpentPoints)
    {
    maxPossibleMaxBet = 1;
    }
    else if (availablePoints - spentPoints >= maxPossibleBet)
    {
    maxPossibleMaxBet = maxPossibleBet;
    }
    else
    {
    maxPossibleMaxBet = availablePoints - spentPoints;
    }

    //otherVars = buildJsonObject(otherVars, "maxPossibleBet", maxPossibleBet );  
    //myLog(JSON.stringify(otherVars));

    return maxPossibleMaxBet;
}

function recalculateYourAvailableBets(index) {
    myLog("recalculateYourAvailableBets");

    //logUpdateYourBetInputs(index)

    possibleBets = getPossibleBets();
    placedBets = getPlacedBets();
    availablePoints = getAvailablePoints();
    spentPoints = getSpentPoints();
    requiredMinSpentPoints = getRequiredMinSpentPoints();
    maxPossibleBet = getMaxPossibleBet();
    var yourBet = getYourBet(index);
      
    //logUpdateYourBetOtherVars(possibleBets, placedBets, availablePoints, spentPoints, requiredMinSpentPoints, maxPossibleBet, yourBet)

    var maxPossibleMaxBet = 0;
    var maxBet = 0;

    maxPossibleMaxBet = determineMaxPossibleMaxBet(availablePoints, requiredMinSpentPoints, spentPoints, maxPossibleBet);
    maxBet = determineMaxBet(yourBet, availablePoints, requiredMinSpentPoints, maxPossibleBet, maxPossibleMaxBet);

    //logUpdateYourBetOtherVars2(maxPossibleMaxBet, maxBet);

    setYourBetItems(index, yourBet, maxBet);
}

function selectionTotals() {
    this.placedBets = getPlacedBets();
    this.availablePoints = getAvailablePoints();
    this.spentPoints = getSpentPoints();
    this.requiredMinSpentPoints = getRequiredMinSpentPoints();
    this.maxPossibleBet = getMaxPossibleBet();

}
