var jsonData;

window.addEventListener("load", () => {
    fetch('http://swapi.dev/api/people/')
        .then(response => response.json())
        .then(data => load(data));
});
  
function load(data) {
    jsonData = data;
    console.log(jsonData);
    showPeopleList(data);
    if (document.querySelectorAll(".numberButtons").length == 0) {
        buttonMaker();
    }
}

document.getElementById("prev").addEventListener('click', prev);
document.getElementById("next").addEventListener('click', next);

function buttonMaker(){
    var numButtons = 0;
    if (jsonData.count % 10 == 0) {
        numButtons = jsonData.count / 10;
    }
    else{
        numButtons = parseInt((jsonData.count / 10) + 1);
        console.log(numButtons);
    }

    var buttonContainer = document.getElementById("buttonContainer");

    for (let buttonNumber = 0; buttonNumber < numButtons; buttonNumber++) { 
        const item = document.createElement("button");
        item.className = "numberButtons"; 
        item.innerHTML = buttonNumber + 1;
        buttonContainer.appendChild(item);
    }

    var pages = document.querySelectorAll(".numberButtons");
    pages.forEach(btn => {
        btn.addEventListener('click', (event) => numberButton(event.target));
    })
}

function numberButton(button){
    fetch('http://swapi.dev/api/people/?page=' + button.innerHTML)
        .then(response => response.json())
        .then(data => load(data));
}

function prev(){
    //console.log(jsonData);
    //console.log(jsonData.previous);
    if(jsonData.previous != null){
        fetch(jsonData.previous)
        .then(response => response.json())
        .then(data => load(data));
    }

    return;
}

function next(){
    //console.log(jsonData);
    //console.log(jsonData.next);
    if(jsonData.next){
        fetch(jsonData.next)
        .then(response => response.json())
        .then(data => load(data));
    }

    return;
}

function showPeopleList(data) {
    const peopleListElement = document.getElementById("people");
    peopleListElement.innerHTML = "";
    renderPeopleList(data.results, peopleListElement);
}
  
function renderPeopleList(people, parent) {
    people.forEach(person => {
        parent.appendChild(renderOnePerson(person));
    });
}
  
function renderOnePerson(person) {
    const item = document.createElement("li");

    item.innerHTML = `<h2>${person.name}</h2>`;

    return item;
}