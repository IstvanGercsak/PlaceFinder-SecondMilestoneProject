function goToMap() {
    $('html, body').animate({
        scrollTop: $("#map").offset().top
    }, 1000);
}