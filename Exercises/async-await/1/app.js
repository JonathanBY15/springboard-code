let favNumber = 15;

// 1
async function ex1() {
  let data = await $.getJSON(`http://numbersapi.com/${favNumber}?json`);
  console.log(data);
}
ex1();

// 2
const favNumbers = [7, 15, 31];
async function ex2() {
  let data = await $.getJSON(`http://numbersapi.com/${favNumbers}?json`);
  console.log(data);
}
ex2();

// 3
async function ex3() {
  let facts = await Promise.all(
    Array.from({ length: 4 }, () => $.getJSON(`http://numbersapi.com/${favNumber}?json`))
  );
  facts.forEach(data => {
    $('body').append(`<p>${data.text}</p>`);
  });
}
ex3();
