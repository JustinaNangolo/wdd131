// Footer Date logic
const year = document.querySelector("#currentyear");
const lastMod = document.querySelector("#lastModified");

const today = new Date();
year.innerHTML = today.getFullYear();
lastMod.innerHTML = document.lastModified;