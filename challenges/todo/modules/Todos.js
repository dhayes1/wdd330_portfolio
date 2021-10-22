import { qs, onTouch } from "./utilities.js"
import { readFromLS, writeToLS } from "./ls.js"

/****************************************
 * the constructor should:
 * 1. set a variable with the element our todo list will be built in
 * 2. the key we will use to read/write from localStorage
 * **************************************/
/*
class Todo {
    constructor(_id, _content, _completed) {
        this.id = _id;
        this.content = _content;
        this.completed = _completed;
    }
}
*/

export default class Todos {
    constructor() {
        this.element = qs('#task-list');
        this.key = 'myTodos';
        todoList = readFromLS(this.key);
    }

    addTodo() {
        const element = qs();
        saveTodo(element, this.key)
    }
}

let todoList = null;

/** 
 * 
 * build a todo object, add it to the todoList, and save the new list to local storage.
 * A todo should look like this: { id : timestamp, content: string, completed: bool }
 * @param {string} key The key under which the value is stored under in LS
 * @param {string} task The text of the task to be saved.
 * 
 * */
function saveTodo(task, key) {
    const todo = {id: Date.now(), content: task, completed: false};

    todoList.push(todo);

    writeToLS(key, todoList);
 }

