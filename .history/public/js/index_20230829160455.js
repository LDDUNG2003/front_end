var mobile = document.getElementById = ("mobileMenu");

mobile.addEventListener("click", function() {
    //   check if the class navBar is visible
    if (navBar.style.display === "block") {
        navBar.style.display = "none";
    } else {
        navBar.style.display = "block";
    }
});