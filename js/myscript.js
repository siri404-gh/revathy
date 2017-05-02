var elements = ['websiteTitle', 'websiteTag', 'heroText', 'heroDescription'];
var title = 'Nattamai';
var values = [title, 'The one in a million', 'I am Revathy', 'And I\'m a Web Developer'];
window.onload = function() {
    document.title = title;
    elements.map(function(e, i) {
        document.getElementById(e).innerHTML = values[i];
    });
    var links = document.getElementsByClassName('link');
    for (var i = 0; i< links.length; i++) {
        links[i].addEventListener('click', function() {
            var id = this.innerHTML.toLowerCase();
            var top = $("#"+id).offset().top - 75;
            $('html, body').animate({
                scrollTop: top
            }, 500);
        });
    }
};