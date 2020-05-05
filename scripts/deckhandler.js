const deckSuits = ['SPADES', 'DIAMONDS', 'CLUBS', 'HEARTS'];
const deckValues = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
const gameDeck = [];
const gameHand = [];

function GameCard(id, value, suit) {
  (this.id = id), (this.value = value), (this.suit = suit);
}

function findCard(id) {
    let card = gameHand[gameHand.findIndex((el) => el['id'] === id)];
    return card;
}

function createDeck() {
  for (let i = 0; i < deckSuits.length; i++) {
    for (let x = 0; x < deckValues.length; x++) {
      let card = { value: deckValues[x], suit: deckSuits[i] };
      gameDeck.push(card);
    }
  }
  gameDeck.reverse();
}

function renderGameDeck() {
  document.getElementById('gameDeck').innerHTML = '';
  for (let i = 0; i < gameDeck.length; i++) {
    let card = document.createElement('button');
    let icon;
    let value;
    if (gameDeck[i].suit === 'SPADES') {
      icon = '&spades;';
      card.className = 'cardBtn blackCard';
    } else if (gameDeck[i].suit === 'CLUBS') {
      icon = '&clubs;';
      card.className = 'cardBtn blackCard';
    } else if (gameDeck[i].suit === 'DIAMONDS') {
      icon = '&diams;';
      card.className = 'cardBtn redCard';
    } else (icon = '&hearts;'), (card.className = 'cardBtn redCard');
    if (gameDeck[i].value === 14) {
      value = 'A';
    } else if (gameDeck[i].value === 13) {
      value = 'K';
    } else if (gameDeck[i].value === 12) {
      value = 'Q';
    } else if (gameDeck[i].value === 11) {
      value = 'J';
    } else value = gameDeck[i].value;
    card.value = gameDeck[i].value + ' ' + gameDeck[i].suit;
    card.innerHTML = `${icon}<br>${value}`;
    card.setAttribute('onclick', 'getCard(this)');
    document.getElementById('gameDeck').appendChild(card);
  }
}

function createGameCard(id, value, suit) {
  const newCard = new GameCard(id, value, suit);
  gameHand.push(newCard);
  removeCard(gameDeck, value, suit);
  showCard(btnId, value, suit);
  gameDeckModal.style.display = 'none';
  console.log(gameHand, gameDeck);
}

// Return the deck index of a card, remove it, and create a new array with the card object
function removeCard(array, value, suit) {
  let i = array.findIndex((obj) => obj.value === value && obj.suit === suit);
  if (i === -1) {
    return;
  } else array.splice(i, 1);
}

createDeck();
renderGameDeck();
