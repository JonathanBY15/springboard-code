// Shuffle the cards https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1


// 1
$.getJSON('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1').then(data => {
    // Shuffle the cards and get the deck_id
    const deckId = data['deck_id'];
    console.log(deckId);

    // 1) Draw a card and console.log the value and suit
    $.getJSON(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`).then(data => {
        const card = data['cards'][0];
        console.log(`${card['value']} of ${card['suit']}`);
    });
});

// 2
$.getJSON('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1').then(data => {
    // Shuffle the cards and get the deck_id
    const deckId = data['deck_id'];
    console.log(deckId);

    // Draw the first card
    $.getJSON(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`).then(data1 => {
        const card1 = data1['cards'][0];


        // Draw the second card from the same deck
        $.getJSON(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`).then(data2 => {
            const card2 = data2['cards'][0];
            console.log(`${card2['value']} of ${card2['suit']}`);
            console.log(`${card1['value']} of ${card1['suit']}`);
        });
    });
});


// 3

// Function to Draw a card from a deck
function drawCard(deckId) {
    return $.getJSON(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`);
}


// let user draw a card by clicking a button
$.getJSON('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1').then(data => {
    const deckId = data['deck_id'];
    console.log(deckId);

    $('#draw-card-btn').on('click', async function () {
        const cardData = await drawCard(deckId);
        const card = cardData['cards'][0];
        console.log(`${card['value']} of ${card['suit']}`);

        // random rotation and translation
        const angle = Math.random() * 90 - 45;
        const randomX = Math.random() * 40 - 20;
        const randomY = Math.random() * 40 - 20;

        $('#cards').append(`<img src="${card['image']}" style="transform: translate(${randomX}px, ${randomY}px) rotate(${angle}deg);">`);
    });
});