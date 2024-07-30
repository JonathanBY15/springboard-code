const favNumber = 15;

// 1)
$.getJSON(`http://numbersapi.com/${favNumber}?json`).then(data => {
    console.log(data);
});

// 2)
const favNumbers = [7, 15, 31];
$.getJSON(`http://numbersapi.com/${favNumbers}?json`).then(data => {
    console.log(data);
});

// 3)
const promises = [];
for (let i = 0; i < 4; i++) {
    promises.push($.getJSON(`http://numbersapi.com/${favNumber}?json`));
}

Promise.all(promises).then(facts => {
    facts.forEach(data => {
        $("body").append(`<p>${data.text}</p>`);
    });
}
);

