import { writeToLS, readFromLS } from "./ls.js"

class Comments {
    constructor(type) {
        this.type = type;
    }
    addComments() {
        console.log(this)
        const hikeName = document.querySelector('.hikeName').innerHTML;
        const hikeComment = document.querySelector('#hikeComment').value;
        hikecomments.push({name: hikeName, content: hikeComment, date: Date.now()})
        console.log(hikecomments)
        writeToLS(this.type, hikecomments)
        this.showCommentsList()
    }
    showCommentsList() {
        // if (hikecomments.length == 0) {
        //     hikecomments = readFromLS(this.type)
        // }
        // else {
        //     let el = document.querySelector('ul.allComments')
        //     renderCommentList(el, hikecomments)
        // }
        let el = document.querySelector('ul.allComments')
        renderCommentList(el, hikecomments)
    }
    
}
let hikecomments = [];

function renderCommentList(element, hikecomments) {
    // clear out any comments that might be listed
    element.innerHTML = '';
    // add the new list of comments
    hikecomments.forEach(el => {
      let item = document.createElement('li');
      item.innerHTML = `
              ${el.name}: ${el.content}
        `;
  
      element.appendChild(item);
    });
}

export {Comments}