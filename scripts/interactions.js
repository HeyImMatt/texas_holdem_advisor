const gameDeckModal = document.querySelector('.cardContainerModal');
let btnId;

function displayDeck() {
  gameDeckModal.style.display = 'block';
}

window.onclick = function (event) {
  if (event.target === gameDeckModal) {
    gameDeckModal.style.display = 'none';
  }
};

function setBtnId(ele) {
  btnId = ele.id;
}

function getCard(ele) {
  ele.className = 'cardBtn-selected';
  let arr = ele.value.split(' ');
  id = btnId.substring(0, 3);
  value = parseInt(arr[0]);
  suit = arr[1];
  createGameCard(id, value, suit);
}

function showCard(btnId, value, suit) {
  let card = document.getElementById(btnId);
  let icon;
  if (suit === 'SPADES') {
    icon = '&spades;';
    card.className = 'addCardBtn largeCard blackCard';
  } else if (suit === 'CLUBS') {
    icon = '&clubs;';
    card.className = 'addCardBtn largeCard blackCard';
  } else if (suit === 'DIAMONDS') {
    icon = '&diams;';
    card.className = 'addCardBtn largeCard redCard';
  } else (icon = '&hearts;'), (card.className = 'addCardBtn largeCard redCard');
  if (value === 14) {
    value = 'A';
  } else if (value === 13) {
    value = 'K';
  } else if (value === 12) {
    value = 'Q';
  } else if (value === 11) {
    value = 'J';
  }
  card.innerHTML = value + '' + icon;
}
