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





const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Sapporo Japan",
        location: "Sapporo, Japan",
        dedicated: "2016, June, 5", 
        area: 107639,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/sapporo-japan/400x250/sapporo-japan-temple-exterior-2.jpg"    
        
    },

    {
        templeName: "Bangkok Thailand",
        location: "Bangkok, Thailand",
        dedicated: "2023, October, 22",   
        area: 48525,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/bangkok-thailand-temple/bangkok-thailand-temple-40055.jpg"
    },

    {
        templeName: "Mexico City Benemerito Mexico",
        location: "Mexico City, Mexico",
        dedicated: "2022, October, 31",  
        area: 29000,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/mexico-city-benemerito-mexico-temple/mexico-city-benemerito-mexico-temple-56024-main.jpg"
    },

    {
        templeName: "Cape Town South Africa",
        location: "Cape Town, South Africa",
        dedicated: "2025, October, 25",  
        area: 9500,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/cape-town-south-africa-temple/cape-town-south-africa-temple-64609-main.jpg"
    }
    
    // Add more temple objects here...
];

createTempleCards(temples);

function createTempleCards(temples) {
    temples.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedicated = document.createElement("p");
        let area = document.createElement("p");
        let image = document.createElement("img");

        image.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedicated.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label"> Size:</span> ${temple.area} sq ft`;

        image.setAttribute("src", temple.imageUrl);
        image.setAttribute("alt", `${temple.templeName} Temple`);
        image.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedicated);
        card.appendChild(area);
        card.appendChild(image);

        document.querySelector(".gallery").appendChild(card);
    });
}


