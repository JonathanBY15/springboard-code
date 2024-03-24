const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];
const fruitLowerCase = fruit.map(str => str.toLowerCase()); // array that stores lowercase fruit names

// Filter The List Based On User Input
function search(str) {
	let results = [];

	// variable to track index while looping
	let idx = 0;

	// loop through lowercase fruit
	for (let fruitStr of fruitLowerCase) {
		// if the fruit contains the str, push the fruit to results from the original fruit array(non-lowercase)
		if (fruitStr.includes(str.toLowerCase())) {
			results.push(fruit[idx]);
		}
		idx++;
	}

	return results;
}

function searchHandler(e) {
	const currentInputValue = e.target.value; // get current input
	const matchingSuggestions = search(currentInputValue); // get suggestions
	// if there are suggestions
	if (matchingSuggestions.length > 0) {
		showSuggestions(matchingSuggestions, currentInputValue); // show the suggestions
		suggestions.style.display = 'block'; // display the suggestion panel
	} else {
		suggestions.style.display = 'none'; // hide the suggestion panel if no matches found
	}
}

// Take the results list and display it in a drop down list below the search bar.
function showSuggestions(results, inputVal) {
	// clear suggestions
	while (suggestions.firstChild) {
		suggestions.removeChild(suggestions.firstChild);
	}

	// create li for each result
	for (let result of results) {
		const inputIdx = result.toLowerCase().indexOf(inputVal.toLowerCase());

		// If inputVal is found in result
		if (inputIdx !== -1) {
			const beforeInput = result.substring(0, inputIdx); // extract from beginning of result to inputIdx
			const afterInput = result.substring(inputIdx + inputVal.length); // extract from (inputIdx + inputLenght) to end of result (from end of input to end of result)

			const newLi = document.createElement('li'); // create the li

			// Create span element
			const newSpan = document.createElement('span'); // create the span
			newSpan.innerText = result.substring(inputIdx, inputIdx + inputVal.length); // set span text to inputVal

			// Append parts to li
			newLi.appendChild(document.createTextNode(beforeInput));
			newLi.appendChild(newSpan);
			newLi.appendChild(document.createTextNode(afterInput));

			// Append li to suggestions
			suggestions.appendChild(newLi);
		}
	}
}

function useSuggestion(e) {
	console.log(e.target.tagName);
	if (e.target.tagName === 'LI') {
		input.value = e.target.innerText; // update input value
		suggestions.style.display = 'none'; // close suggestion panel
		// searchHandler({ target: { value: input.value } }); // search again with the selected suggestion (mimic an event for searchHandler input)
	}
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);


