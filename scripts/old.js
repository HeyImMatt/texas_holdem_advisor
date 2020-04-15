let numberOfPlayers = 5;
let playerPercentage = 100 / numberOfPlayers;
let playersInHand = [numberOfPlayers];

// function generatePlayer() {
//     for (let i = 1, len = playersInHand.length; i <= len; i++) {
//     handPlayer(playerID) = i;
//     handPlayer(playerName) = `Player ${i}`;
//     handPlayer(playerPercentage) = playersInHand.length / 100;
//     }
// }

function addPlayer() {
    numberOfPlayers += 1;
    if (numberOfPlayers > 10) {
        document.querySelector('.numberOfPlayers').innerHTML =
            'Cannot have more than 10';
        numberOfPlayers = 10;
    } else
        document.querySelector('.numberOfPlayers').innerHTML = numberOfPlayers;
}

function removePlayer() {
    numberOfPlayers -= 1;
    if (numberOfPlayers < 2) {
        document.querySelector('.numberOfPlayers').innerHTML =
            'Cannot have less than 2';
        numberOfPlayers = 2;
    } else
        document.querySelector('.numberOfPlayers').innerHTML = numberOfPlayers;
}

function calculatePlayerPercentage() {
    let n = 100 / numberOfPlayers;
    playerPercentage = n.toFixed(1);
    document.querySelector('.percentage').innerHTML = playerPercentage;
}

function newHand() {
    gameDeck = createDeck();
    potAmount = undefined;
    callAmount = undefined;
    potEquity = undefined;
    document.getElementById('handInfo').querySelector('#potAmountInput').value =
        '';
    document
        .getElementById('handInfo')
        .querySelector('#callAmountInput').value = '';
    document.querySelector('.potEquity').textContent = '';
    document.querySelector('.advice').textContent = '';
}

document.querySelector('.numberOfPlayers').innerHTML = numberOfPlayers;
document.querySelector('.percentage').innerHTML = playerPercentage;

addPlayerBtn.addEventListener('click', addPlayer);
addPlayerBtn.addEventListener('click', calculatePlayerPercentage);
removePlayerBtn.addEventListener('click', removePlayer);
removePlayerBtn.addEventListener('click', calculatePlayerPercentage);

/* Refactor items:
can calculatePlayerPercentage go into the variable at the top?
*/