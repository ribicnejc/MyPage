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

// var h = document.getElementById('timeline-education').style.height;
//
// console.log(h);
// document.getElementById("verticalLine").style.height = h;
// alert(h);
// line.style.height = "500px";
function scrollToContact(){
    // $("#contact-layout").click(function() {

    $('body').hide(100);
        // $('html, body').animate({
        //     scrollTop: $("#contact-layout").offset().top
        // }, 2000);

    // });
}