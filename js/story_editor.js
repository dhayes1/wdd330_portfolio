function loadStory() {
    let storyName = document.getElementById("name_input").value; //get user's story name
    let storyHTML = localStorage.getItem(storyName);             //find user's story name on local storage
    document.getElementById("story_editor").value = storyHTML;   //load user's story in the text editor element
}

function saveStory() {
    let storyName = document.getElementById("name_input").value;    //get user's story name
    let storyHTML = document.getElementById("story_editor").value;  //get user's story
    localStorage.setItem(storyName, storyHTML);                     //save user's story on local storage as story name
}

function displayStory() {
    let storyHTML = document.getElementById("story_editor").value;  //get user's story
    document.getElementById("story_display").innerText = storyHTML; //set story_display text to user's story
}