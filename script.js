/* Scrolling smooth between href attributes:
 * http://jsfiddle.net/9SDLw/ */
$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href')  ).offset().top - 70
    }, 1500);
    return false;
});

function initMap() {
        var uluru = {lat: 47.4585139, lng: 7.8606451};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 13,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
}

