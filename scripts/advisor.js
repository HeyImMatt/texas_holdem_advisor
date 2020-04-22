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
    const pc1 = gameHand[gameHand.findIndex((el) => el['id'] === 'pc1')];
    const pc2 = gameHand[gameHand.findIndex((el) => el['id'] === 'pc2')];
    if (pc1.value === pc2.value) {
        handType = 'PAIR';
        if (pc1.value <= 4) {
            suggestedAction = 'Play only from late position';
        } else if (pc1.value <= 6 && pc1.value >= 5) {
            suggestedAction = 'Play from mid or late position';
        } else {
            suggestedAction = 'Play from any position';
        }
    } else if (pc1.suit === pc2.suit) {
        handType = 'SUITED';
        if (
            (pc1.value >= 11 && pc2.value >= 10) ||
            (pc2.value === 9 && (pc1.value === 11 || pc1.value === 10))
        ) {
            suggestedAction = 'Play from any position';
        } else if (
            (pc1.value === 14 && pc2.value >= 6) ||
            (pc2.value === 9 && pc1.value >= 12) ||
            (pc2.value === 8 && pc1.value >= 9)
        ) {
            suggestedAction = 'Play from mid or late position';
        } else if (
            (pc1.value >= 13 && pc2.value >= 2) ||
            (pc2.value === 7 && pc1.value >= 8 && pc1.value !== 12) ||
            (pc2.value === 6 && pc1.value >= 7 && pc1.value <= 9) ||
            (pc2.value === 5 && (pc1.value === 7 || pc1.value === 6)) ||
            (pc2.value === 4 && pc1.value === 5)
        ) {
            suggestedAction = 'Play from late position';
        } else suggestedAction = 'Fold';
    } else {
        handType = 'UNSUITED';
        if (
            (pc1.value >= 13 && pc2.value >= 11) ||
            (pc1.value === 14 && pc2.value === 10)
        ) {
            suggestedAction = 'Play from any position';
        } else if (pc1.value >= 11 && pc2.value >= 10) {
            suggestedAction = 'Play from mid or late position';
        } else if (
            (pc1.value === 14 && pc2.value >= 7) ||
            (pc2.value === 9 && pc1.value >= 10 ) ||
            (pc2.value === 8 && (pc1.value >= 9 && pc1.value <= 11)) ||
            (pc2.value === 7 && (pc1.value >= 8 && pc1.value <= 9)  )
        ) {
            suggestedAction = 'Play from late position';
        } else suggestedAction = 'Fold';
    }
    updateAdvice();
    console.log(handType, suggestedAction);
}


/*
The problem: Given a set of 5-7 cards, what is the best 5-card poker hand combination
and what cards make up that combo.

Problem: Evaluate what my set of cards contains going in descending order from 
best to worst poker hand. Then evaluate what the possible outcomes/outs are.
Inputs: 5 cards + 1 card + 1 card.
Outputs: Best current poker hand and what cards make up that hand
How to label the data: pc1, pc2, cc1, cc2, cc3, cc4, cc5, result

Example: 
Full house:
{id: pc1, value: 2, suit: clubs}
{id: pc2, value: 2, suit: spades}
{id: cc1, value: 2, suit: diamonds}
{id: cc2, value: 3, suit: clubs}
{id: cc3, value: 3, suit: spades}


*/

//This gives me an object with the value number and count of each in the gameHand array
function countValueMatches(arr) {
    let result = {};
    for (let i = 0; i < arr.length; i++) {
        let val = arr[i].value;
        if (result[val] > 0) {
            result[val]++;
        } else {
            result[val] = 1;
        }
    }
    return result;
}

// Trying a nested loop approach:

function pairSetQuad() {
    for (let i = 0; i < gameHand.length; i++) {
        if (gameHand[i].value === pc1.value) {
            for (let j = i + 1; j < gameHand.length; j++) {
                if (gameHand[i].value === gameHand[j].value) {
                    for (let k = j + 1; k < gameHand.length; k++) {
                        if (gameHand[j].value === gameHand[k].value) {
                            handType = `Four of a Kind: ${gameHand[k].value}`;
                        } else {
                            handType = `Three of a Kind: ${gameHand[j].value}`;
                        }
                    }
                } else {
                    handType = `Pair: ${gameHand[i].value}`;
                }
            }
        } else {
            break;
        }
    }
    console.log(handType);
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
