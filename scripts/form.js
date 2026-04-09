
// 1. Set the current year
const currentYear = new Date().getFullYear();
const yearElement = document.getElementById("currentyear");
if (yearElement) {
    yearElement.textContent = currentYear;
}

const lastModifiedElement = document.getElementById("lastModified");
if (lastModifiedElement) {
    lastModifiedElement.textContent = document.lastModified;
}

const products = [
    { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
    { id: "fc-2050", name: "power laces", averagerating: 4.7 },
    { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
    { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
    { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];

document.addEventListener("DOMContentLoaded", () => {
    const selectElement = document.getElementById("productName");

    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id; // Value attribute is the ID
        option.textContent = product.name; // Display text is the Name
        selectElement.appendChild(option);
    });
});