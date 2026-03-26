// Dynamically set the current year
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

// Dynamically set the last modified date
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;


const temperature = 10; 
const windSpeed = 5;    



function calculateWindChill(temp, wind) {
    return 13.12 + 0.6215 * temp - 11.37 * wind ** 0.16 + 0.3965 * temp * wind ** 0.16;
}



let windChill = "N/A";

if (temperature <= 10 && windSpeed > 4.8) {
    windChill = calculateWindChill(temperature, windSpeed).toFixed(1);
}

document.getElementById("windChill").textContent = windChill + " °C";