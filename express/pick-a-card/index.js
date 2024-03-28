const express = require('express');
const axios = require('axios');

const app = express();

app.get('/', (req, res) => {
    res.send("<a href='/card'>Pick a card!</a>");
});

app.get('/card', async (req, res) => {
    let deckResponse = await axios.get("https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1");
    let deckId = deckResponse.data.deck_id;
    let cardResponse = await axios.get(`http://deckofcardsapi.com./api/deck/${deckId}/draw/?count=1`);
    let card = cardResponse.data.cards[0];
    console.log(card);
    res.send("Here's your card " + `<br/><img src="${card.image}" />`);
    
});

app.listen(3000, () => {
    console.log('Now listening on port: 3000');
});

