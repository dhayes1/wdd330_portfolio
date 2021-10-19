import { default as Task } from './modules/todos.js'
import { saveTodo, getTodos } from './modules/todos.js'
import { qs, onTouch } from './modules/utilities.js'

window.addEventListener('load', main);

const btnAll = qs('#btn-fltr-all');
const btnActive = qs('#btn-fltr-active');
const btnCompleted = qs('#btn-fltr-completed');
const btnAdd = qs('#btn-add');

function main() {
    btnAll.addEventListener('click', filterAll);
    btnActive.addEventListener('click', filterActive);
    btnCompleted.addEventListener('click', filterCompleted);
    btnAdd.addEventListener('click', addTask);

    let todos = getTodos('MyTodos.txt');
    console.log(todos);
    //todos.listTodos();
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
    const task = new Task();

    task.addTodo();

   //alert(`New task ${Task.content()} has been added`);
}