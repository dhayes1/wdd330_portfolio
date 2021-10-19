import { default as Task } from './modules/todos.js'
import { saveTodo, getTodos } from './modules/todos.js'
import { qs, onTouch } from './modules/utilities.js'

//window.addEventListener('load', main);

// get button elements
const btnAll = qs('#btn-fltr-all');
const btnActive = qs('#btn-fltr-active');
const btnCompleted = qs('#btn-fltr-completed');
const btnAdd = qs('#btn-add');

// add eventListeners
btnAll.addEventListener('click', filterAll);
btnActive.addEventListener('click', filterActive);
btnCompleted.addEventListener('click', filterCompleted);
btnAdd.addEventListener('click', addTask);

// get Todo list from localStorage
getTodos('myTodos');

// list all existing Todo items

function filterAll() {
    
}

function filterActive() {
    
}

function filterCompleted() {
    
}

function addTask() {

}