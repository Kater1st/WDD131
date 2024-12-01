document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const menuIcon = document.querySelector('.menu-icon');
    const navList = document.querySelector('.nav-list');  // Change to .nav-list

    hamburger.addEventListener('click', function(e) {
        e.preventDefault();
        // Toggle the nav menu
        navList.classList.toggle('active');
        // Toggle the icon
        menuIcon.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!navList.contains(event.target) && !hamburger.contains(event.target)) {
            navList.classList.remove('active');
            menuIcon.classList.remove('active');
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {

    const currentYear = new Date().getFullYear();
    document.getElementById("currentyear").textContent = currentYear;
  
    const lastModified = document.lastModified;
    document.getElementById("lastModified").textContent = `Last modified: ${lastModified}`;
  });