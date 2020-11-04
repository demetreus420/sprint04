"use strict";

mapboxgl.accessToken =
    "pk.eyJ1IjoiZGltaWNoMTc4IiwiYSI6ImNrZ3psbGJqODE1MTMydW9leWlnZ25wazYifQ.WSHO8x1LI0Cknw-KyGaBZA";

let map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/dark-v10",
    center: [165.973, -50.604167],
    zoom: 13,
});

let marker = new mapboxgl.Marker().setLngLat([165.973, -50.604167]).addTo(map);

map.addControl(
    new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
    })
);

map.addControl(
    new mapboxgl.GeolocateControl({
        positionOptions: {
            enableHighAccuracy: true,
        },
        trackUserLocation: true,
    })
);

let nav = new mapboxgl.NavigationControl();
map.addControl(nav, "top-right");

map.on('move', () => {
    let { lng, lat } = map.getCenter();
    document.getElementById('cord').innerHTML = `<span>Longitude: ${lng}</span><span>Latitude: ${lat}</span>`;
});



