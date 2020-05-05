// Defining the function that changes icon to cross sign and adds class.

function myFunction() {
    var x = document.getElementById("nav");
    var menuIcon = document.getElementById('menu-icon');
    if (x.className === "nav") {
        x.className += " responsive";
        menuIcon.innerHTML = '&#10005;';
    } else {
        x.className = "nav";
        menuIcon.innerHTML = '&#9776;';
    }
}
