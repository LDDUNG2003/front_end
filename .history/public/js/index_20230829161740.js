var mobile = document.getElementById("mobileMenu");
var navBar__list = document.getElementsByClassName("navBar__list")[0]
mobile.addEventListener("click", function() {
    if (navBar__list.style.display === "block") {
        navBar__list.style.display = "none";
    } else {
        navBar__list.style.display = "block";
    }
});