// importScripts("https://ajax.googleapis.com/ajax/libs/jquery/1.5.1/jquery.min.js");

function initMap() {

    var uluru = {lat: 46.170911, lng: 14.434540};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}

function scrollToContact() {
    $('html, body').animate({
        scrollTop: $("#contact-layout").offset().top
    }, 1000);
}