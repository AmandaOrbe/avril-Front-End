// TODO: Put your JS code in here
import GMaps from 'gmaps';
const latitude = (data) => {
  return data.results[0].geometry.location.lat;
}

const longitude = (data) => {
  return data.results[0].geometry.location.lng;
}



const logData = (data) => {

  const form = document.querySelector("form");
  form.insertAdjacentHTML("beforeend", `<p>latitude = ${latitude(data)} longitude = ${longitude(data)}</p>`)

};
const logMap = (data) => {
  const map = new GMaps({ el: '#map', lat: latitude(data), lng: longitude(data), zoom: 14 });
  const marker = { lat: latitude(data), lng:longitude(data)};
  map.addMarkers([ marker ]);
}


const geocode = (e) => {
  event.preventDefault();
  const address = document.getElementById("search").value
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}`
  console.log(url)
  fetch(url)
    .then(response => response.json())
    .then(data => {
      logData(data);
      logMap(data);

    });

};




const input = document.getElementById("geocode"); // that's an <input id="search">



input.addEventListener("click", geocode);
