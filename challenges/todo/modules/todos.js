import { readFromLS, writeToLS } from "./ls.js";

export default class Todos {
    todoList = null;

    /** @constructs */
    constructor (_content) {
        this.content = _content;
        this.id = Date.now();
        this.checked = false;
    }

    // getters
    //get content() { return this.content; }
    //get id() { return this.id; }
    //get checked() { return this.checked; }

    // setters


    // methods
    completeTodo(){
        console.log('Task completed.');
        
        this.checked = true;
    }

    listTodos() {
        console.log('Todos listed.');

        readFromLS(1);
    }

    addTodo() {
        console.log('Todo added.');
        this.todoList = this;
    }

    filterTodos() {
        console.log('Todos filtered');
    }

    removeTodo() {
        console.log('Todo removed');
    }

}

/** build a todo object, add it to the todoList, and save the new list to local storage.
 * @param {string} key The key under which the value is stored under in LS 
 * @param {string} task The text of the task to be saved. */
export function saveTodo(task, key) { 
    // build a todo object
    const todo = new Todos(task);

    // add todo to the todoList
    //todoList = [todo];

    // convert todo object to strings
    const stringifiedTODO = JSON.stringify(todo);
    console.log(stringifiedTODO);

    // save list to local storage
    writeToLS(key, stringifiedTODO);
}

/** check the contents of todoList, a local variable containing a list of ToDos. If it is null then pull the list of todos from localstorage, update the local variable, and return it
 * @param {string} key The key under which the value is stored under in LS
 * @return {array} The value as an array of objects */
function getTodos(key) { }

