// Replace 'YOUR_MAPBOX_ACCESS_TOKEN' with your Mapbox access token
mapboxgl.accessToken = 'pk.eyJ1IjoidG9tYXNubjk4IiwiYSI6ImNseHI4MHg4ZzBrdXQyam9tbmR2Y2ZlZHQifQ.naW1BbxBbf20EERFLqREng';

const geojson = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [-121.99086461286373, 37.408798455507124]
            },
            "properties": {
                "title": "Apple",
                "description": "Job number one"
            }
        }
    ]
};

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-121.98685827727454, 37.360250540945366],
    zoom: 9
});

console.log('Adding markers from GeoJSON data...');
geojson.features.forEach(function(marker) {
    console.log('Adding marker:', marker);

    // Create a HTML element for each feature
    var el = document.createElement('div');
    el.className = 'marker';

    // Make a marker for each feature and add to the map
    new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
            .setHTML('<h3>' + marker.properties.title + '</h3><p>' + marker.properties.description + '</p>'))
        .addTo(map);
});