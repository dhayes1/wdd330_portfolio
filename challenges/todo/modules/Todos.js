import { qs, onTouch, dc } from "./utilities.js"
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
        //todoList = readFromLS(this.key);

        this.listTodos();
    }

    addTodo() {
        // get value of new task
        console.log(this);
        const task = qs('#add-task');

        saveTodo(task.value, this.key)
        
        // refresh todo list
        this.listTodos();

        // clear task text box
        task.value = '';        
    }

    removeTodo() {
        /*
        const index = todoList.indexOf(obj);
        if (obj >= 0) {
            todoList.splice(index, 1);
        }
        console.log(todoList);
        writeToLS(this.key, todoList);
        */console.log(this);
        this.listTodos();
        renderTodoList(todoList, this.element);

        /*
        // find selected task
        const selTask = this;

        // remove selected task
        const taskIndex = todoList.indexOf(selTask);
        todoList.splice(taskIndex);

        // update list
        */
    }

    listTodos() {
        getTodos(this.key);
        renderTodoList(todoList,this.element);
    }

    filterTodo() {
        // get selected filter

        // update list based on selected filter
    }

    completeTodo(obj) {
        console.log('complete selected');
        console.log(this);
        // find selected task

        // update task to complete

        // list todos based on filter
    }
}

let todoList = null;

/** 
 * 
 * check the contents of todoList, a local variable containing a list of ToDos. 
 * If it is null then pull the list of todos from localstorage, update the local variable, and return it
 * @param {string} key The key under which the value is stored under in LS 
 * @return {array} The value as an array of objects
 * 
*/
function getTodos(key) { 
    (todoList === null) ? todoList = readFromLS(key) : todoList; 
}

/** 
 * 
 * build a todo object, add it to the todoList, and save the new list to local storage.
 * A todo should look like this: { id : timestamp, content: string, completed: bool }
 * @param {string} key The key under which the value is stored under in LS
 * @param {string} task The text of the task to be saved.
 * 
**/
function saveTodo(task, key) {
    const todo = {id: Date.now(), content: task, completed: false};

    todoList.push(todo);

    writeToLS(key, todoList);
 }

/**
 * 
 * foreach todo in list, build a li element for the todo, and append it to element
 * @param {array} list The list of tasks to render to HTML
 * @param {element} element The DOM element to insert our list elements into.
 * 
*/
function renderTodoList(list, element) {     
    element.innerHTML = '';
    
    list.forEach(function(e) {
        // create list element
        const li = dc('li');
        li.className = 'module todo';

        // create completed button element
        const btnCompleted = dc('button');
        btnCompleted.className = 'button';
        btnCompleted.id = 'btn-complete';
        btnCompleted.name = 'btn-complete';
        //btnCompleted.addEventListener('click', function(ev) {
        //    this.completeTodo(ev);
        //});

        // create task name element
        const taskName = dc('p');
        taskName.className = 'task';
        taskName.innerHTML = e.content;

        // create delete button element
        const btnDelete = dc('button');
        btnDelete.className = 'button';
        btnDelete.id = 'btn-delete';
        btnDelete.name = 'btn-delete';
        btnDelete.innerHTML = 'X';
        //btnDelete.addEventListener('click', this.boundRemove);
        
        li.appendChild(btnCompleted);
        li.appendChild(taskName);
        li.appendChild(btnDelete);

        element.appendChild(li);       
    });

    const tasksLeft = qs('#status');
    tasksLeft.innerHTML = `${list.length} tasks left`;
    //console.log(element);
}
