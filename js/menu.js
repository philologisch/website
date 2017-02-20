var menuButton = document.getElementsByClassName('menuButton')[0];
var mynav = document.getElementsByClassName('mobileMenu')[0];

menuButton.onclick = function() {
    if(mynav.style.visibility === 'hidden') {
        mynav.style.visibility = 'visible';
    } else {
        mynav.style.visibility = 'hidden';
    }
}