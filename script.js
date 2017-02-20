var menuButton = document.getElementById('menuButton');
var mynav = document.getElementById('navigation');

menuButton.onclick = function() {
    if(mynav.className === 'inactive') {
        mynav.className = '';
    } else {
        mynav.className = 'inactive';
    }
}