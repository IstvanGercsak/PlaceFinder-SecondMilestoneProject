var zoom = 14;
var my_API_key = "AIzaSyDtRwOm65-mxXVVt4lLrE7mQ-PW1tdR5O8";

function findSpecificPlace(findSpecificPlace) {

    $("#places>li").remove();
    $("#map").show();


    var searchedPlace = $('#search').val();
    var xhr = new XMLHttpRequest();

    if (searchedPlace === "") {
        alert("City field is empty! Please give a destination!");
    } else {

        goToMap();
        $("#reset").show();
        $("#more").show();

        xhr.open("GET", "https://maps.googleapis.com/maps/api/geocode/json?address=" + searchedPlace + "&key=" + my_API_key);
        xhr.send();

        xhr.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                var map;
                var getLat = JSON.parse(this.responseText).results[0].geometry.location.lat;
                var getLng = JSON.parse(this.responseText).results[0].geometry.location.lng;

                map = new google.maps.Map(document.getElementById('map'), {
                    center: {lat: getLat, lng: getLng},
                    zoom: zoom
                });

                var actualCity = {lat: getLat, lng: getLng};

                // Create the places service.
                var service = new google.maps.places.PlacesService(map);
                var getNextPage = null;
                var moreButton = document.getElementById('more');
                moreButton.onclick = function () {
                    moreButton.disabled = true;
                    if (getNextPage) getNextPage();
                };

                // Perform a nearby search.
                service.nearbySearch(
                    {location: actualCity, radius: 1500, type: [findSpecificPlace]},
                    function (results, status, pagination) {
                        if (status !== 'OK') return;

                        createMarkers(results, map);

                        moreButton.disabled = !pagination.hasNextPage;

                        getNextPage = pagination.hasNextPage && function () {
                            pagination.nextPage();
                        };
                    });
            }

            function createMarkers(places, map) {
                var bounds = new google.maps.LatLngBounds();
                var placesList = document.getElementById('places');

                for (var i = 0, place; place = places[i]; i++) {
                    var image = {
                        url: place.icon,
                        size: new google.maps.Size(71, 71),
                        origin: new google.maps.Point(0, 0),
                        anchor: new google.maps.Point(17, 34),
                        scaledSize: new google.maps.Size(25, 25)
                    };

                    var marker = new google.maps.Marker({
                        map: map,
                        icon: image,
                        title: place.name,
                        position: place.geometry.location
                    });

                    var li = document.createElement('li');
                    li.textContent = place.name;
                    placesList.appendChild(li);

                    bounds.extend(place.geometry.location);
                }
                map.fitBounds(bounds);
            }
        }
    }
}