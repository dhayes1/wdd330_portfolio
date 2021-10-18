import { default as Task } from './modules/todos.js'
import { saveTodo } from './modules/todos.js'

window.addEventListener('load', main);

const btnAll = document.getElementById('btn-fltr-all');
const btnActive = document.getElementById('btn-fltr-active');
const btnCompleted = document.getElementById('btn-fltr-completed');
const btnAdd = document.getElementById('btn-add');

function main() {
    btnAll.addEventListener('click', filterAll);
    btnActive.addEventListener('click', filterActive);
    btnCompleted.addEventListener('click', filterCompleted);
    btnAdd.addEventListener('click', addTask);
}

function filterAll() {
    alert('All button clicked');
}

function filterActive() {
    alert('Active button clicked');
}

function filterCompleted() {
    alert('Completed button clicked');
}

function addTask() {
    // get new task
    const newTask = document.getElementById('add-task');

    alert(`New task ${newTask.value} has been added`);
}