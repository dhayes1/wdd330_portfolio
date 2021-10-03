/*
function doSomething(){
    console.log('Something Happened!');
}
*/
/*
// log the event that triggered the eventListener
function doSomething(event) {
    console.log(event.type);
}
*/
/*
// log the node that was clicked
function doSomething(event) {
    console.log(event.target);
}
*/
/*
// log the location of the mouse when the event listner is triggered
function doSomething(event) {
    console.log(`screen: (${event.screenX},${event.screenY}), page: (${event.pageX},${event.pageY}), client: (${event.clientX},${event.clientY})`);
}

addEventListener('click', doSomething);
*/

const clickParagraph = document.getElementById('click');

clickParagraph.addEventListener('click',() => console.log('click'));
clickParagraph.addEventListener('mousedown',() => console.log('down'));
clickParagraph.addEventListener('mouseup',() => console.log('up'));

const dblclickParagraph = document.getElementById('dblclick');
dblclickParagraph.addEventListener('dblclick', highlight);

function highlight(event) {
    event.target.classList.toggle('highlight');
}