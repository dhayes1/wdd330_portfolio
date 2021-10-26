import Todos from "./modules/Todos.js";

//window.addEventListener('load', main);
const tasks = new Todos();

const btnFilters = document.querySelectorAll('.btn-filter');
btnFilters.forEach(el => el.addEventListener('click', tasks.filterTodo.bind(el)));

document.querySelector('#btn-add').addEventListener('click', tasks.addTodo.bind(tasks));

let test = tasks.removeTodo;
