/* Scrolling smooth between href attributes:
 * http://jsfiddle.net/9SDLw/ */
$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href')  ).offset().top - 70
    }, 1500);
    return false;
});

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

