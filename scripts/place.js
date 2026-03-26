// Dynamically set the current year
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

// Dynamically set the last modified date
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;


// 2. Wind Chill Logic
const temp = 10; // Static value for now
const wind = 5;  // Static value for now

function calculateWindChill(t, w) {
    // Metric Formula: 13.12 + 0.6215T - 11.37(V^0.16) + 0.3965T(V^0.16)
    return (13.12 + 0.6215 * t - 11.37 * Math.pow(w, 0.16) + 0.3965 * t * Math.pow(w, 0.16)).toFixed(1);
}

// Check conditions and display
const displayWindChill = () => {
    const wcElement = document.getElementById("windChill");
    if (temp <= 10 && wind > 4.8) {
        wcElement.textContent = `${calculateWindChill(temp, wind)} °C`;
    } else {
        wcElement.textContent = "N/A";
    }
};

// Run on load
displayWindChill();