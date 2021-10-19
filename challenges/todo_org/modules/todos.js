import { readFromLS, writeToLS } from './ls.js'
import { qs } from './utilities.js'

export default class Todos {
    /** @constructs */
    constructor () {
        this.content = '';
        this.id = Date.now();
        this.checked = false;
    }

    // methods
    completeTodo(){
        console.log('Task completed.');
        
        this.checked = true;
    }

    listTodos() {
        console.log(this);
        /*
        if (getTodos('MyString.txt').length) {
            renderTodoList(qs('#task-list'))
        }
        */
    }

    addTodo() {
        console.log('Todo added.');
        this.content = qs('#add-task').value;

        const task  = {content: this.content, id: this.id, checked: this.checked}
        saveTodo(task, 'MyTodos.txt');
        
        console.log(this.content);
        console.log(this.id);
    }

    filterTodos() {
        console.log('Todos filtered');
    }

    removeTodo() {
        console.log('Todo removed');
    }

}

let todoList = null;

/** build a todo object, add it to the todoList, and save the new list to local storage.
 * @param {string} key The key under which the value is stored under in LS 
 * @param {string} task The text of the task to be saved. */
export function saveTodo(task, key) { 
    // build a todo object
    const todo = task;

    // add todo to the todoList
    todoList = [todo];
    console.log(`todoList = ${todoList}`);

    // convert todo object to strings
    const stringifiedTODO = JSON.stringify(todo);
    console.log(stringifiedTODO);

    // save list to local storage
    writeToLS(key, stringifiedTODO);
}

/** check the contents of todoList, a local variable containing a list of ToDos. If it is null then pull the list of todos from localstorage, update the local variable, and return it
 * @param {string} key The key under which the value is stored under in LS
 * @return {array} The value as an array of objects */
export function getTodos(key) { 
    const todoList = readFromLS('MyTodos.txt');
}

/** foreach todo in list, build a li element for the todo, and append it to element
 * @param {array} list The list of tasks to render to HTML
 * @param {element} element The DOM element to insert our list elements into. */
function renderTodoList(list, element) { 

}