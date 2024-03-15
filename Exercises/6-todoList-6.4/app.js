const todoInput = document.querySelector('form input[type="text"]');
const todoList = document.querySelector('#todoList');

function createTodo() {
    // create todo div
    const newTodo = document.createElement('div');
    newTodo.classList.add('todoItem');

    // create todo deleteBtn
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('deleteBtn')
    deleteBtn.innerHTML = '&#10008;';

    // create todo checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    // create todo span (text)
    const newTodoText = document.createElement('span');
    newTodoText.innerText = todoInput.value;
    todoInput.value = '';

    // append elements
    newTodo.append(deleteBtn);
    newTodo.append(checkbox);
    newTodo.append(newTodoText);

    todoList.append(newTodo);
    storeTodos();
}

const form = document.querySelector('form');

// Add todo to list on form submission
form.addEventListener('submit', function (event) {
    event.preventDefault();
    createTodo();
})

// Remove todo item on deleteBtn click
todoList.addEventListener('click', function (event) {
    if (event.target.tagName === 'BUTTON') {
        event.target.parentElement.remove();
        storeTodos();
    }
})

// Remove all todos
const deleteAllBtn = document.querySelector('#deleteAllBtn');

deleteAllBtn.addEventListener('click', function (event) {
    const todoItems = document.querySelectorAll('.todoItem');
    for (let todo of todoItems) {
        todo.remove();
    }
    storeTodos();
})

// Check todo
todoList.addEventListener('click', function (event) {
    if (event.target.tagName === 'INPUT') {
        event.target.parentElement.classList.toggle('checked');
        storeTodos();
    }
})

// Part 2: Local Storage

// store todos in local storage as html
function storeTodos() {
    localStorage.setItem('todos', todoList.innerHTML);
}

// get todos from local storage
function getTodos() {
    todoList.innerHTML = localStorage.getItem('todos');

    // Restore the checked state of the checkboxes
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    for (let checkbox of checkboxes) {
        const todoItem = checkbox.parentElement;
        if (todoItem.classList.contains('checked')) {
            checkbox.checked = true;
        } else {
            checkbox.checked = false;
        }
    }
}

// get todos from local storage on page load
window.addEventListener('load', getTodos);
