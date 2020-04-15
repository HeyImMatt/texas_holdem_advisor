let potAmount;
let callAmount;
let potEquity;
let outsEquity;
let suggestedAction;
let handType;

function updateAdvice() {
    document.querySelector('.advice').textContent = suggestedAction;
}

function updatOutsEquity() {
    document.querySelector('.outsEquity').textContent = outsEquity;
}

//function to calculate the pot equity
function calculatePotEquity() {
    potAmount = parseInt(
        document.getElementById('handInfo').querySelector('#potAmountInput')
            .value,
    );
    callAmount = parseInt(
        document.getElementById('handInfo').querySelector('#callAmountInput')
            .value,
    );
    if (potAmount && callAmount) {
        let n = (callAmount / (potAmount + callAmount)) * 100;
        potEquity = n.toFixed(1) + '%';
        document.querySelector('.potEquity').textContent = potEquity;
        console.log(potEquity);
    }
}

// First we evaluate the player's hand before the flop.
// Use the pre-flop hand strength chart to display strength and
// make an advisement on whether to stay in or fold.
function evaluatePlayerHandPreFlop() {
    if (playerCard1.value === playerCard2.value) {
        handType = 'PAIR';
        if (
            playerCard1.value === 4 ||
            playerCard1.value === 3 ||
            playerCard1.value === 2
        ) {
            suggestedAction = 'Play only from late position';
        } else if (playerCard1.value === 6 || playerCard1.value === 5) {
            suggestedAction = 'Play from mid or late position';
        } else {
            suggestedAction = 'Play from any position';
        }
    } else if (playerCard1.suit === playerCard2.suit) {
        handType = 'SUITED';
        if (playerCard1.value >= 10 && playerCard2.value >= 9) {
            suggestedAction = 'Play from any position';
        } else if (
            (playerCard1.value >= 9 && playerCard2.value >= 8) ||
            (playerCard1.value === 14 && playerCard2.value >= 6)
        ) {
            suggestedAction = 'Play from mid or late position';
        } else if (
            (playerCard1.value >= 13 && playerCard2.value >= 2) ||
            (playerCard1.value === 7 && playerCard2.value >= 5) ||
            (playerCard1.value === 8 && playerCard2.value === 7) ||
            (playerCard1.value === 7 && playerCard2.value === 6) ||
            (playerCard1.value === 6 && playerCard2.value === 5) ||
            (playerCard1.value === 5 && playerCard2.value === 4)
        ) {
            suggestedAction = 'Play from late position';
        } else suggestedAction = 'Fold';
    } else {
        handType = 'UNSUITED';
        if (playerCard1.value >= 13 && playerCard2.value >= 11) {
            suggestedAction = 'Play from any position';
        } else if (playerCard1.value >= 11 && playerCard2.value >= 10) {
            suggestedAction = 'Play from mid or late position';
        } else if (
            (playerCard1.value >= 14 && playerCard2.value >= 7) ||
            (playerCard1.value >= 10 && playerCard2.value >= 9) ||
            (playerCard1.value === 11 && playerCard2.value === 8) ||
            (playerCard1.value === 10 && playerCard2.value === 8) ||
            (playerCard1.value === 9 && playerCard2.value === 8) ||
            (playerCard1.value === 9 && playerCard2.value === 7) ||
            (playerCard1.value === 8 && playerCard2.value === 7)
        ) {
            suggestedAction = 'Play from late position';
        } else suggestedAction = 'Fold';
    }
    updateAdvice();
    console.log(handType, suggestedAction);
}

function evaluateFlop() {
    pocketPairToSet();
    updatOutsEquity();
    updateAdvice();
}

// Next we evaluate the player's hand after the flop.
// Let's check what the player got if anything, display that, and then show number of
// outs and outs equity. LAST ELSE CASE SHOULD RETURN 'hand not defined'.
// Compare outs equity with pot equity and display a recommended action

/* Next we evaluate the player's hand after the turn.

Let's check what the player got if anything, display that, 
One over card = Are any of players cards higher than comm cards?

Pairs, Sets, Quads = Count value matches between players cards and community cards

and then show number of
outs and outs equity
Compare outs equity with pot equity and display a recommended action
*/
// Next we evaluate the player's hand after the river.
// Let's check what the player got if anything and display their current hand
// in a hand ranking list. Bonus points for showing the percentage possiblity of the
// other hands in the list.

// Make a function to display a variety of bet options to push players out
// ex. 20% equity, 30% equity, etc