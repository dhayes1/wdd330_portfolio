import { default as Task } from './modules/todos.js'
import { saveTodo } from './modules/todos.js'

window.addEventListener('load', main);

function main() {
    let td1 = new Task("1st Task");
    let td2 = new Task("2nd Task");
    let td3 = new Task("3rd Task");

    let saveTaske = saveTodo(td1.id, td1.content,);
    td1.listTodos();
}