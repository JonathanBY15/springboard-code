const gameContainer = document.getElementById("game");

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  let divId = 1;
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // give it an id
    newDiv.id = String(divId);
    divId++;

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

// track selected cards
const selectedCards = [];

// TODO: Implement this function!
function handleCardClick(event) {
  const card = event.target;

  // ignore click events if two cards are already selected
  if (selectedCards.length === 2) {
    return;
  }

  // mark card as selected
  selectedCards.push(card);
  card.style.backgroundColor = card.classList[0];

  // if two cards are selected
  if (selectedCards.length === 2) {
    const firstCard = selectedCards[0];
    const secondCard = selectedCards[1];

    // if cards don't match
    if (!(firstCard.classList[0] === secondCard.classList[0] && firstCard.id !== secondCard.id)) {
      setTimeout(function () {
        firstCard.style.backgroundColor = 'white';
        secondCard.style.backgroundColor = 'white';
        // clear selectedCards array
        selectedCards.splice(0, selectedCards.length);
      }, 1000);
    }
    else {
      setTimeout(function () {
        // clear selectedCards array
        selectedCards.splice(0, selectedCards.length);
      }, 1000);
    }
  }
}

// when the DOM loads
createDivsForColors(shuffledColors);
