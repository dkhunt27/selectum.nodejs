function getPossibleBets() {
    return parseInt(document.getElementById("possibleBets").innerHTML);
}
// no need for setPossibleBets()

function getPlacedBets() {
    return parseInt(document.getElementById("placedBets").innerHTML);
}
function setPlacedBets(value) {
    //console.log("setPlacedBets");
    //console.log("value:"+value);
    document.getElementById("placedBets").innerHTML = value;
}

function getAvailablePoints() {
    return parseInt(document.getElementById("availablePoints").innerHTML);
}
function setAvailablePoints(value) {
    //console.log("setAvailablePoints");
    //console.log("value:"+value);
    document.getElementById("availablePoints").innerHTML = value;
}

function getSpentPoints() {
    return parseInt(document.getElementById("spentPoints").innerHTML);
}
function setSpentPoints(value) {
    //console.log("setSpentPoints");
    //console.log("value:"+value);
    document.getElementById("spentPoints").innerHTML = value;
}


function getGameRowClassName(game) {
    return document.getElementById("gameRow" + game).className;
}
function setGameRowClassName(game, className) {
    //console.log("setGameRowClassName");
    //console.log("game:"+game);
    //console.log("className:"+className);
    document.getElementById("gameRow" + game).className = className;
}

function getYourBetText(game, value) {
    return document.getElementById("yourSelection" + game).innerHTML;
} 
function setYourBetText(game, value) {
    //console.log("setYourBetText");
    //console.log("game:"+game);
    //console.log("value:"+value);
    document.getElementById("yourSelection" + game).innerHTML = value;
}

function getYourBetClassName(game, className) {
    return document.getElementById("yourSelection" + game).className;
}
function setYourBetClassName(game, className) {
    //console.log("setYourBetClassName");
    //console.log("game:"+game);
    //console.log("className:"+className);
    document.getElementById("yourSelection" + game).className = className;
}

function getRowHasBet(game) {
    return parseInt(document.getElementById("rowHasBet" + game).value);
}
function setRowHasBet(game, value) {
    //console.log("setRowHasBet");
    //console.log("game:"+game);
    //console.log("value:"+value);
    document.getElementById("rowHasBet" + game).value = value;
}

function getYourBetMaxBet(game) {
    return parseInt(document.getElementById("yourBetMaxBet" + game).value);
}
function setYourBetMaxBet(game, value) {
    //console.log("setYourBetMaxBet");
    //console.log("game:"+game);
    //console.log("value:"+value);
    document.getElementById("yourBetMaxBet" + game).value = value;
}

function getYourBetMinBet(game) {
    return parseInt(document.getElementById("yourBetMinBet" + game).value);
}
function setYourBetMinBet(game, value) {
    //console.log("setYourBetMinBet");
    //console.log("game:"+game);
    //console.log("value:"+value);
    document.getElementById("yourBetMinBet" + game).value = value;
}

function getYourBetValue(game) {
    return parseInt(document.getElementById("yourBetValue" + game).value);
}
function setYourBetValue(game, value) {
    //console.log("setYourBetValue");
    //console.log("game:"+game);
    //console.log("value:"+value);
    document.getElementById("yourBetValue" + game).value = value;

    // whenever we set the bet value, we also need to set the radio selection value
}

function getYourBetRadio(game) {
    return parseInt(document.getElementById("yourBetRadio" + game).value);
}
function setYourBetRadio(game, yourBet, maxBet) {
    //console.log("setYourBetRadio");
    //console.log("game:"+game);
    //console.log("yourBet:"+yourBet);
    //console.log("maxBet:"+maxBet);
    if (yourBet > 0)
    {
        document.getElementById("radioYourBetG" + game + "B" + yourBet).checked = true;
    }
    else
    {
        for (x = 1; x <= 5; ++x) {
            document.getElementById("radioYourBetG" + game + "B" + x).checked = false;
        }
    }

    setYourBetRadioMaxBet(game, maxBet);
}

function setYourBetRadioMaxBet(game, maxBet) {
    for (x=1; x<=5; ++x)
    {
        if (x <= maxBet)
        {
            document.getElementById("radioYourBetG" + game + "B" + x).disabled = false;
        }
        else
        {
            document.getElementById("radioYourBetG" + game + "B" + x).disabled = true;
        }
    }
}

function getRequiredMinSpentPoints() {
    return parseInt(document.getElementById("requiredMinSpentPoints").value);
}
// no need for set

function getMaxPossibleBet() {
    return parseInt(document.getElementById("maxPossibleBet").value);
}
// no need for set