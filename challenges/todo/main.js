import Todos from "./modules/todos.js";
import { onClick } from "./modules/utilities.js"

//window.addEventListener('load', main);
const tasks = new Todos();

document.querySelector('.btn-filter').addEventListener('click', function(event) {
    console.log(this);
    tasks.filterTodo();
});
document.querySelector('#btn-add').addEventListener('click', e => tasks.addTodo());