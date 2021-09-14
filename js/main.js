const arrIndex = [
    {
        label: "Week 1 Notes",
        url: "weeko1/index.html"
    }    
];

var oList = document.getElementsByTagName("ol");

arrIndex.forEach(CreateList);

function CreateList() {
    var listItem = document.createElement("li");
    listItem.innerText  = arrIndex.label;
    listItem.setAttribute('href', arrIndex.url);
    oList.appendChild(listItem);
}