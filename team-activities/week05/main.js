import { hikeList } from "./hikes.js";
import Hikes from './hikes.js';
  
  const myHike = new Hikes('hikeListId');

  const imgBasePath = "//byui-cit.github.io/cit261/examples/";
  //on load grab the array and insert it into the page
  window.addEventListener("load", () => {
    showHikeList();
  });
  
  function showHikeList() {
    const hikeListElement = document.getElementById("hikes");
    hikeListElement.innerHTML = "";
    renderHikeList(hikeList, hikeListElement);
  }
  
  function renderHikeList(hikes, parent) {
    hikes.forEach(hike => {
      parent.appendChild(renderOneHike(hike));
    });
  }

  function renderOneHike(hike) {
  const item = document.createElement("li");

  item.innerHTML = ` <h2>${hike.name}</h2>
        <div class="image"><img src="${imgBasePath}${hike.imgSrc}" alt="${hike.imgAlt}"></div>
        <div>
                <div>
                    <h3>Distance</h3>
                    <p>${hike.distance}</p>
                </div>
                <div>
                    <h3>Difficulty</h3>
                    <p>${hike.difficulty}</p>
                </div>
        </div>`;

    item.addEventListener('click', () => {
        //console.log("click");
        getHikeByName(hike)
    }); 

  return item;
}

function getHikeByName(hikeData) {
    const hikeListElement = document.getElementById("hikes");

    hikeListElement.innerHTML =`<div>
        <h2>${hikeData.name}</h2>
        <div class="image">
            <img src="${imgBasePath}${hikeData.imgSrc}" alt="${hikeData.imgAlt}">
        </div>
        <div>
            <h3>Description:</h3>
            <p>${hikeData.description}</p>
        </div>
        <div>
            <h3>Distance:</h3>
            <p>${hikeData.distance}</p>
        </div>
        <div>
            <h3>Difficulty:</h3>
            <p>${hikeData.difficulty}</p>
        </div>
        <div>
            <h3>Directions:</h3>
            <p>${hikeData.directions}</p>
        </div>
        <button class="BackButton">Return to List</button>
    </div>`;

    document.querySelector('.BackButton').addEventListener('click', showHikeList);

  }