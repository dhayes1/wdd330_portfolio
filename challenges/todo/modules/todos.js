import { readFromLS, writeToLS } from './ls.js'
import { qs } from './utilities.js'

export default class Todos {
    /** @constructs */
    constructor () {
        let content;
        let id;
        let checked;
    }

    // methods
    completeTodo(){
        
    }

    listTodos() {
        
    }

    addTodo() {
        
    }

    filterTodos() {
        
    }

    removeTodo() {
        
    }

}

let todoList = null;

/** build a todo object, add it to the todoList, and save the new list to local storage.
 * @param {string} key The key under which the value is stored under in LS 
 * @param {string} task The text of the task to be saved. */
function saveTodo(task, key) { 
    const todo = new Todos(task);

    if (todoList) {
        todoList.push(todo);
    } else {
        todoList = [todo];
    }

    writeToLS(key, todoList);
}

/** check the contents of todoList, a local variable containing a list of ToDos. If it is null then pull the list of todos from localstorage, update the local variable, and return it
 * @param {string} key The key under which the value is stored under in LS
 * @return {array} The value as an array of objects */
function getTodos(key) { 
    if (!todoList) {
        todoList = [readFromLS(key)];
        return todoList;
    } else {
        return todoList;
    }
}

/** foreach todo in list, build a li element for the todo, and append it to element
 * @param {array} list The list of tasks to render to HTML
 * @param {element} element The DOM element to insert our list elements into. */
function renderTodoList(list, element) { 

}

export { saveTodo, getTodos }