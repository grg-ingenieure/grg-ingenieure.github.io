/* Scrolling smooth between href attributes:
 * http://jsfiddle.net/9SDLw/ */
$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href')  ).offset().top - 70
    }, 1500);
    return false;
});

