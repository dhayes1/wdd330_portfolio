export function writeToLS(key, data) {
    // we can use JSON.stringify to convert our object to a string that can be stored in localStorage.
    window.localStorage.setItem(key, JSON.stringify(data));
  }
  
export function readFromLS(key) {
    // the string we retrieve from localStorage needs to be converted back to an object with JSON.parse
    return JSON.parse(window.localStorage.getItem(key));
  }