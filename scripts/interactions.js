const gameDeckModal = document.querySelector('.cardContainerModal');
let btnId;

function displayDeck() {
    renderGameDeck();
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
    let arr = ele.value.split(' ');
    value = parseInt(arr[0]);
    suit = arr[1];
    if (btnId === 'pc1Btn' || btnId === 'pc2Btn') {
        showCard(btnId, value, suit)
        createPlayerHand(value, suit);
    } else if (
        btnId === 'cc1Btn' ||
        btnId === 'cc2Btn' ||
        btnId === 'cc3Btn' ||
        btnId === 'cc4Btn' ||
        btnId === 'cc5Btn'
    ) {
        createCommunityCards(value, suit);
    }
}

function createPlayerHand(value, suit) {
    if (btnId === 'pc1Btn') {
        playerCard1.value = value;
        playerCard1.suit = suit;
        removeCard(gameDeck, playerCard1.value, playerCard1.suit);
        showCard(btnId, value, suit)
    } else if (btnId === 'pc2Btn') {
        playerCard2.value = value;
        playerCard2.suit = suit;
        removeCard(gameDeck, playerCard2.value, playerCard2.suit);
        showCard(btnId, value, suit)
    }
    gameDeckModal.style.display = 'none';
    console.log(playerCard1, playerCard2, gameDeck);
}

function createCommunityCards(value, suit) {
    if (btnId === 'cc1Btn') {
        communityCard1.value = value;
        communityCard1.suit = suit;
        communityCards.push(communityCard1);
        removeCard(gameDeck, communityCard1.value, communityCard1.suit);
        showCard(btnId, value, suit)
    } else if (btnId === 'cc2Btn') {
        communityCard2.value = value;
        communityCard2.suit = suit;
        communityCards.push(communityCard2);
        removeCard(gameDeck, communityCard2.value, communityCard2.suit);
        showCard(btnId, value, suit)
    } else if (btnId === 'cc3Btn') {
        communityCard3.value = value;
        communityCard3.suit = suit;
        communityCards.push(communityCard3);
        removeCard(gameDeck, communityCard3.value, communityCard3.suit);
        showCard(btnId, value, suit)
    } else if (btnId === 'cc4Btn') {
        communityCard4.value = value;
        communityCard4.suit = suit;
        communityCards.push(communityCard4);
        removeCard(gameDeck, communityCard4.value, communityCard4.suit);
        showCard(btnId, value, suit)
    } else if (btnId === 'cc5Btn') {
        communityCard5.value = value;
        communityCard5.suit = suit;
        communityCards.push(communityCard5);
        removeCard(gameDeck, communityCard5.value, communityCard5.suit);
        showCard(btnId, value, suit)
    }
    gameDeckModal.style.display = 'none';
    console.log(communityCards, gameDeck);
}

function showCard(btnId, value, suit){
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
    card.innerHTML = value + '' + icon;;
}
