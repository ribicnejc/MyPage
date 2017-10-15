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

function sendMail(){
    var name = document.getElementById("input-name").value;
    var subject = document.getElementById("input-subject").value;
    var email = document.getElementById("input-email").value;
    var message = document.getElementById("input-message").value;
    if (name === "" || subject === "" || email === "" || message === "")
        return;
    window.open("mailto:nejc.ribic95@gmail.com" + "?subject=" + subject + "&body=" + message);
}

function preLoad(){
    $(document).ready(function() {
        setTimeout(function(){
            $('body').addClass('loaded');
            $('h1').css('color','#222222');
        }, 1000);
    });
}