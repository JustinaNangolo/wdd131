// Dynamically set the current year
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

// Dynamically set the last modified date
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;

// Hamburger menu
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("open");

    if (navMenu.classList.contains("open")) {
        menuBtn.textContent = "✖";
    } else {
        menuBtn.textContent = "☰";
    }
});


