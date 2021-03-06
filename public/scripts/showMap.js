
mapboxgl.accessToken = mbxToken;

const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/satellite-streets-v11', // style URL
    center: campground.geometry.coordinates, // starting position [lng, lat]
    zoom: 15 // starting zoom
});

map.addControl( new mapboxgl.NavigationControl() );

let popUp = `<h4>${ campground.name }</h4><p>${ campground.location }</p>`;

new mapboxgl.Marker()
  .setLngLat(campground.geometry.coordinates)
  .setPopup(new mapboxgl.Popup().setHTML( popUp ))
  .addTo(map);
  