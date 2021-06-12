mapboxgl.accessToken = token;

let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v10',
    center: [-87.7829, 42.7261],
    zoom: 12
});

let marker = setMarker([-98.4936, 29.4241]);


addMapEvent(marker);



let geocoder = setGeocoder();
addGeocoderToMap(geocoder)
addGeocoderEvent(geocoder)
setPopup("this is my text")


function setGeocoder() {
    return new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
        marker: false
    })
}

function addGeocoderToMap(geocoder) {
    map.addControl(geocoder);
}


function addGeocoderEvent(geocoder){
    geocoder.on('result', function (e){
        marker.setLngLat(e.result.geometry.coordinates)

        setPopup(e.result.geometry.name)
    })
}


function setMarker(point) {
    return new mapboxgl.Marker().setLngLat(point)
        .addTo(map);
}
function addMapEvent(marker) {
    map.on('click', function (e) {
        marker.setLngLat(e.lngLat)
            .addTo(map);
    });
}

function setPopup(textDetails){
    let popup = new mapboxgl.Popup().setHTML(`<p>${textDetails}</p>`)
        .addTo(map);
    marker.setPopup(popup);
}

