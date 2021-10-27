import { qs, onTouch, dc } from "./utilities.js"
import { readFromLS, writeToLS } from "./ls.js"

export default class Todos {
    constructor() {
        this.element = qs('.tasks');
        this.key = 'myTodos';

        this.listTodos();
    }

    addTodo() {
        // get value of new task
        console.log(this);
        const task = qs('#new_task');

        saveTodo(task.value, this.key)
        
        // refresh todo list
        this.listTodos();

        // clear task text box
        task.value = '';        
    }

    removeTodo(event) {
        console.log(this);
        let task = JSON.parse(event.parentElement.id);
        console.log(task.id);
        
        console.log(todoList.includes(event.parentElement.id, 0));
        let found = false;
        const index = todoList.findIndex(function(){
            for(let i = 0; i <= todoList.length; i++) {
                if (todoList[i].id == task.id) {
                    return i;
                }
            }
        });

        if (index >= 0) {
            todoList.splice(index, 1);
        }
        console.log(index);

        writeToLS(this.key, todoList);
        
        this.listTodos();
    }

    completeTodo(event) {
        console.log('complete selected');
        console.log(this);
        console.log(event.parentElement.id);
        // find selected task

        // update task to complete

        // list todos based on filter
    }

    listTodos() {
        getTodos(this.key);

        renderTodoList(todoList,this.element);
        
        const tasksLeft = qs('#total_tasks');
        tasksLeft.innerHTML = `${todoList.length} tasks left`;

        const button = document.querySelectorAll('.button');
        button.forEach(btn => {
            if (btn.id == 'completed-button') {
                btn.addEventListener('click', (event) => this.completeTodo(event.target));
            } else if (btn.id == 'remove-button') {
                btn.addEventListener('click', (event) => this.removeTodo(event.target));
            }
        });
    }
    

    filterTodo(element) {
        console.log('Filter Clicked');
        console.log(this);
        if (this.innerHTML == 'All') {
            console.log('Filter all clicked');
            renderTodoList(todoList, this.element);
        } else if (this.innerHTML == 'Active') {
            console.log('Filter active clicked');
            const activeTasks = [];
            todoList.forEach(task => {
                if (!task.completed) {
                    activeTasks.push(task);
                }
            });

            renderTodoList(activeTasks, this.element);
        } else if (this.innerHTML == 'Completed') {
            console.log('Filter completed clicked');
            const completedTasks = [];
            todoList.forEach(task => {
                if (task.completed) {
                    completedTasks.push(task);
                }
            });

            renderTodoList(completedTasks, this.element);
        } else {
            console.log('Something went wrong!');
        }

        // get selected filter

        // update list based on selected filter
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
        li.className = 'task';
        li.id = JSON.stringify(e);

        // create completed button element
        const btnCompleted = dc('button');
        btnCompleted.className = 'button completed-button';
        btnCompleted.id = 'completed-button';
        btnCompleted.name = 'btnComplete';

        // create task name element
        const taskName = dc('p');
        taskName.className = 'task-content';
        taskName.innerHTML = e.content;

        // create delete button element
        const btnDelete = dc('button');
        btnDelete.className = 'button remove-button';
        btnDelete.id = 'remove-button';
        btnDelete.name = 'btnRemove';
        btnDelete.innerHTML = 'X';
        
        li.appendChild(btnCompleted);
        li.appendChild(taskName);
        li.appendChild(btnDelete);

        element.appendChild(li);       
    });
}
