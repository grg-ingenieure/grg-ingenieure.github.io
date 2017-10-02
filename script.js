/* Scrolling smooth between href attributes:
 * http://jsfiddle.net/9SDLw/ */
$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href')  ).offset().top
    }, 1500);
    return false;
});
/* single-page
 * var cards = ['home', 'about', 'leistungen', 'projekte', 'kontakt']
function chooseCard(cardId) {
    var theCard = document.getElementById(cardId).getAttribute("href");
    var sectionId = theCard.substring(1);
    console.log(sectionId);
    for (var i in cards){
        if (cards[i] == sectionId) {
            document.getElementById(cards[i]).style.display = "block";
        } else {
            document.getElementById(cards[i]).style.display = "none";
        }
    }
    //document.getElementById(cardId).href = '#top';
}*/




