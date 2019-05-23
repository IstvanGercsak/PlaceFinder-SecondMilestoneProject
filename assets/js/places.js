function placesearch() {
    var input = document.getElementById("search");

    var options = {types: ['(cities)']};

    var autoComplete = new google.maps.places.Autocomplete(input, options);
}