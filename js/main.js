// create table of contents list array
const data = ["Ram", "Dodge", "Ford"];

// get the contents list tag
let ol = document.getElementById('content-list');

// create a list item for each item in the contents list arry
data.forEach((item) => {
    let li = document.createElement("li");   //create list element
    li.innerText - item;
    ol.appendChild(li);
});