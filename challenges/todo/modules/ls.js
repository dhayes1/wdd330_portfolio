//start with two...may add more later
/** read a value from local storage and parse it as JSON 
 * @param {string} key The key under which the value is stored under in LS
 * @return {array} The value as an array of objects */
function readFromLS(key) { 
    let todoArray = [];

    //TODO: test functionality. What happens if there is no todos?
    // might need to play with if todoArray === null
    //const todos = localStorage.getItem(key);

    if (localStorage.getItem(key) !== null) {
        todoArray = JSON.parse(localStorage.getItem(key));
    }
    
    return todoArray;
}

/** write an array of objects to local storage under the provided key
 * @param {string} key The key under which the value is stored under in LS
 * @param {array} data The information to be stored as an array of objects. Must be serialized.*/
function writeToLS(key, data) { 
    localStorage.setItem(key, JSON.stringify(data));
}

export { readFromLS, writeToLS }