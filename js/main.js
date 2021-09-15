// create table of contents list array
const data = [
    {
      label: "Week 01",
      url: "week1/"
    },
    {
      label: "Week 02",
      url: "week2/"
     }
  ];
  
  let ol = document.getElementById('content-list');
  
  // create a list item for each item in the contents list arry
  data.forEach((item) => {
      let li = document.createElement("li");   //create list element
      let a = document.createElement("a");
      a.innerText = item.label;
      a.href = item.url;
      li.appendChild(a);
      ol.appendChild(li);
  });