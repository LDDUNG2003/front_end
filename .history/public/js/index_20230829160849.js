var mobile = document.getElementById = ("mobileMenu");
var navBar__list = document.getElementsByClassName("navBar__list")
mobile.addEventListener("click", function() {
    //   check if the class navBar is visible
    if (navBar__list.style.display === "block") {
        navBar__list.style.display = "none";
    } else {
        navBar__list.style.display = "block";
    }
});