import { getJSON, getLocation } from "./utilities.js";

const url = 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-02-02';

window.addEventListener('load', main);

function main() {
    console.log('Running');
    getJSON(url);
}