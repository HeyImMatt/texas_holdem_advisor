const outsPercentageAtFlop = {
    outs20: 67.5,
    outs19: 65.0,
    outs18: 62.4,
    outs17: 59.8,
    outs16: 57.0,
    outs15: 54.1,
    outs14: 51.2,
    outs13: 48.1,
    outs12: 45.0,
    outs11: 41.7,
    outs10: 38.4,
    outs9: 35.0,
    outs8: 31.5,
    outs7: 27.8,
    outs6: 24.1,
    outs5: 20.3,
    outs4: 16.5,
    outs3: 12.5,
    outs2: 8.4,
    outs1: 4.3,
};

const outsPercentageAtTurn = {
    outs20: 43.5,
    outs19: 41.3,
    outs18: 39.1,
    outs17: 37.0,
    outs16: 34.8,
    outs15: 32.6,
    outs14: 30.4,
    outs13: 28.3,
    outs12: 26.1,
    outs11: 23.9,
    outs10: 21.7,
    outs9: 19.6,
    outs8: 17.4,
    outs7: 15.2,
    outs6: 13.0,
    outs5: 10.9,
    outs4: 8.7,
    outs3: 6.5,
    outs2: 4.3,
    outs1: 2.2,
};

const pocketPairToSet = () => {
    for (let i = 0; i < communityCards.length; i++)
        handType === 'PAIR' && playerCard1.value !== communityCards[i].value;
        outsEquity = outsPercentageAtFlop.outs2
        suggestedAction = `Pocket pair to set.`
}

//function checkForSetOrQuad

const setToBoatOrQuad = () => {
    for (let i = 0; i < communityCards.length; i++)
        handType === 'PAIR' && playerCard1.value === communityCards[i].value;
        suggestedAction = `Set to full house or four of a kind. Hand equity: ${outsPercentageAtFlop[13]}%`
}