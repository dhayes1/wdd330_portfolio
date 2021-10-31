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
        //console.log(this);
        let task = JSON.parse(event.parentElement.id);
        //console.log(task.id);
        
        //console.log(todoList.includes(event.parentElement.id, 0));

        // findIndex will loop through the array and return the first index
        // to match the conditional test. Will return -1 if not found
        const index = todoList.findIndex(obj => obj.id === task.id)
        
        if (index >= 0) {
            todoList.splice(index, 1);
        }
        
        //console.log(index);

        // save changes to array in localStorage
        writeToLS(this.key, todoList);
        
        this.listTodos();
    }

    completeTodo(event) {
        //console.log('complete selected');
        //console.log(this);
        //console.log(event.parentElement.id);
        // find selected task
        let task = JSON.parse(event.parentElement.id);
        const index = todoList.findIndex(obj => obj.id === task.id);

        if (index >= 0) {
            todoList[index].completed = !todoList[index].completed;
        }

        // update task to complete
        if (event.innerHTML == '') {
            event.innerHTML = 'X';
        } else {
            event.innerHTML = '';
        }
        event.nextSibling.classList.toggle('completed');

        // save changes to array in localStorage
        writeToLS(this.key, todoList)
    }

    listTodos() {
        getTodos(this.key);

        renderTodoList(todoList,this.element);
        
        const tasksLeft = qs('#total_tasks');
        tasksLeft.innerHTML = `${this.numberOfTodos('all').length} tasks`;

        this.addEL();
    }
    

    filterTodo(event) {
        console.log(this);
        console.log(event);

        // TODO: change "this" to "event" to look at the buttons
        if (this.innerHTML == 'All') {
            renderTodoList(this.numberOfTodos('all'), qs('.tasks'));
            const tasksLeft = qs('#total_tasks');
            tasksLeft.innerHTML = `${this.numberOfTodos('all').length} tasks`;
        } else if (this.innerHTML == 'Active') {
            renderTodoList(this.numberOfTodos('active'), qs('.tasks'));
            const tasksLeft = qs('#total_tasks');
            tasksLeft.innerHTML = `${this.numberOfTodos('active').length} tasks`;
        } else if (this.innerHTML == 'Complete') {            
            renderTodoList(this.numberOfTodos('completed'), qs('.tasks'));
            const tasksLeft = qs('#total_tasks');
            tasksLeft.innerHTML = `${this.numberOfTodos('completed').length} tasks`;
        } else {
            console.log('Something went wrong!');
        }

        // get selected filter

        // update list based on selected filter
    }

    addEL() {;
        const button = document.querySelectorAll('.button');
        button.forEach(btn => {
            //let btnClassList = btn.classList;
            if (btn.id == 'completed-button') {
                btn.addEventListener('click', (event) => this.completeTodo(event.target));
            } else if (btn.id == 'remove-button') {
                btn.addEventListener('click', (event) => this.removeTodo(event.target));
            } else if (btn.classList.contains('filter-button')) {
                btn.addEventListener('click', (event) => this.filterTodo(event.target));
            } else if (btn.id == 'button_add') {
                btn.addEventListener('click', this.removeTodo);
            } else {
                console.log(`You need to add a conditional statemnet for ${btn} class or id!`);
            }
        });
    }

    numberOfTodos(filter = null) {
        switch (filter) {
            case 'all':
                return todoList;
            case 'active':
                return todoList.filter(obj => obj.completed === false);
            case 'completed':
                return todoList.filter(obj => obj.completed === true);
            default:
                return todoList;
        }
    }
}

let todoList = null;
let activeFilter = 'all';

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
        if (e.completed) {
            btnCompleted.innerHTML = 'X';
        }

        // create task name element
        const taskName = dc('p');
        if (e.completed) {
            taskName.className = 'task-content completed';
        } else {
            taskName.className = 'task-content';
        }
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