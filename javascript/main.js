function initMap() {
    var uluru = {lat: -25.363, lng: 131.044};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}

// var textarea = document.getElementById("ta");
// var heightLimit = 200; /* Maximum height: 200px */
//
// textarea.oninput = function() {
//     console.log("test");
//     textarea.style.height = ""; /* Reset the height*/
//     textarea.style.height = Math.min(textarea.scrollHeight, heightLimit) + "px";
// };
// var textarea = document.getElementById("ta");
// var limit = 200;
// var label = document.getElementById("ta-label");
//
//
// textarea.oninput = function() {
//     textarea.style.height = "";
//     textarea.style.height = (Math.min(textarea.scrollHeight, 300)) + "px";
// };

// $(function() {
//     $("ta").autoResize()
// });

var textarea = document.querySelector('textarea');

textarea.addEventListener('keydown', autosize);

function autosize(){
    var el = this;
    setTimeout(function(){
        // el.style.cssText = 'height:auto; padding:0';
        // for box-sizing other than "content-box" use:
        // el.style.cssText = '-moz-box-sizing:content-box';
        el.style.cssText = 'height:' + el.scrollHeight + 'px';
    },0);
}