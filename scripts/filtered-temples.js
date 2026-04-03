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
    menuBtn.textContent = navMenu.classList.contains("open") ? "✖" : "☰";
});



const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "images/aba-nigeria.webp"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "images/manti.webp"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "images/payson-utah-.webp"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "images/yigo_guam.webp"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "images/washington_dc_.webp"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "images/lima-peru.webp"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "images/mexico-city-.webp"
    },
    {
        templeName: "Sapporo Japan",
        location: "Sapporo, Japan",
        dedicated: "2016, June, 5", 
        area: 107639,
        imageUrl:
            "images/sapporo-japan.webp"
        
    },

    {
        templeName: "Bangkok Thailand",
        location: "Bangkok, Thailand",
        dedicated: "2023, October, 22",   
        area: 48525,
        imageUrl:
            "images/bangkok-thailand.webp"
    },

    {
        templeName: "Mexico City Benemerito Mexico",
        location: "Mexico City, Mexico",
        dedicated: "2022, October, 31",  
        area: 29000,
        imageUrl:
            "images/mexico-city-benemerito-.webp"
    },

    {
        templeName: "Cape Town South Africa",
        location: "Cape Town, South Africa",
        dedicated: "2025, October, 25",  
        area: 9500,
        imageUrl:
            "images/cape-town-south-africa-.webp"
    },

    {
        templeName: "Bern Switzerland Temple",
        location: "Bern, Switzerland",
        dedicated: "1955, September, 9",
        area: 35546,
        imageUrl:
            "images/bern-switzerland.webp"
    }
    
    // Add more temple objects here...
];

createTempleCards(temples);


function createTempleCards(temples) {
    const gallery = document.querySelector(".gallery");
    gallery.innerHTML = ""; // Clear existing content

    temples.forEach(temple => {
        let card = document.createElement("section");
        card.classList.add("temple-card");

        let name = document.createElement("h3");
        name.textContent = temple.templeName;

        let location = document.createElement("p");
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;

        let dedicated = document.createElement("p");
        dedicated.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;

        let area = document.createElement("p");
        area.innerHTML = `<span class="label">Area:</span> ${temple.area} sq ft`;

        let image = document.createElement("img");
        image.setAttribute("src", temple.imageUrl);
        image.setAttribute("alt", `${temple.templeName} Temple`);
        image.setAttribute("loading", "lazy");
        image.setAttribute("width", "400");
        image.setAttribute("height", "250");


        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedicated);
        card.appendChild(area);
        card.appendChild(image);

       

        document.querySelector(".gallery").appendChild(card);
    });
}


// Navigation Filter Event Listeners
const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const filter = e.target.textContent;
        document.querySelector("main h2").textContent = filter;

        let filteredTemples = temples;

        if (filter === "Old") {
            filteredTemples = temples.filter(t => parseInt(t.dedicated.split(",")[0]) < 1900);
        } else if (filter === "New") {
            filteredTemples = temples.filter(t => parseInt(t.dedicated.split(",")[0]) > 2000);
        } else if (filter === "Large") {
            filteredTemples = temples.filter(t => t.area > 90000);
        } else if (filter === "Small") {
            filteredTemples = temples.filter(t => t.area < 10000);
        }

        createTempleCards(filteredTemples);
    });
});



