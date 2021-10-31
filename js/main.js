// create table of contents list array
const data = [
    {
      label: "Week 01",
      url: "week01/index.html"
    },
    {
      label: "Week 02",
      url: "week02/index.html"
    },
    {
      label: "Week 03",
      url: "week03/index.html"
    },
    {
      label: "Week 04",
      url: "week04/index.html"
    },
    {
      label: "Week 05",
      url: "week05/index.html"
    },
    {
      label: "Week 07",
      url: "week07/index.html"
    }
    // must include new objects in curly brackets
    /*{                       
      
     }*/
  ];
  
  // get ol tag for list (must be loaded or will cause errors)
  let ol = document.getElementById('content-list');
  
  // create a list item for each item in the contents list arry
  data.forEach((item) => {
      let li = document.createElement("li");    // create list element
      let a = document.createElement("a");      // creat hyperlink element
      a.innerText = item.label;                 // set innertext value
      a.href = item.url;                        // set href value
      li.appendChild(a);                        // add hyperlink element to list element
      ol.appendChild(li);                       // add list element(s) to ordered list element
  });