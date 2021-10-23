import Todos from "./modules/todos.js";
import { onClick } from "./modules/utilities.js"

//window.addEventListener('load', main);
const tasks = new Todos();

document.querySelector('#btn-delete').addEventListener('click', tasks.removeTodo());
document.querySelector('.btn-filter').addEventListener('click', tasks.filterTodo());
document.querySelector('.btn-filter').addEventListener('click', tasks.completeTodo());
document.querySelector('#btn-add').addEventListener('click', function(e) {
    tasks.addTodo();
});