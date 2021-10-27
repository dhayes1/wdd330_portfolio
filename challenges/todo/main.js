import Todos from "./modules/Todos.js";

//window.addEventListener('load', main);
const tasks = new Todos();

const btnFilters = document.querySelectorAll('.button-filter');
btnFilters.forEach(el => el.addEventListener('click', tasks.filterTodo.bind(el)));

document.querySelector('#button_add').addEventListener('click', tasks.addTodo.bind(tasks));

