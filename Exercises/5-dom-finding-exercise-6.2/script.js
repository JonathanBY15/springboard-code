// 1)
var container = document.getElementById('container');

// 2)
const container = document.querySelector('#container');

// 3)
const listItems = document.querySelectorAll('.second');

// 4)
const thirdItem = document.querySelector('ol .third');

// 5)
container.innerText = "Hello!";

// 6)
const footer = document.querySelector('.footer');
footer.classList.add('main');

// 7)
footer.classList.remove('main');

// 8)
const newLi = document.createElement('li');

// 9)
newLi.innerText = 'four';

// 10)
const ul = document.querySelector('ul');
ul.append(newLi);

// 11)
const lis = document.querySelectorAll('ol li');
for (let li in lis) {
    li.style.backgroundColor = "green";
}

// 12)
footer.remove();