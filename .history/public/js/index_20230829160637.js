var mobile = document.getElementById = ("mobileMenu");

mobile.addEventListener("click", function() {
    //   check if the class navBar is visible
    if (navBar__list.style.display === "block") {
        navBar.style.display = "none";
    } else {
        navBar__list.style.display = "block";
    }
});