// 12. JavaScript Objects & 13. Arrays
const courses = [
    {
        name: "German A1: Absolute Beginner",
        level: "Beginner",
        duration: "8 Weeks",
        schedule: "Mon/Wed 18:00 - 20:00",
        topics: ["Basic Greetings", "Present Tense", "Numbers 1-100", "Ordering at a Cafe"],
        id: "a1-beg"
    },
    {
        name: "German A2: Elementary",
        level: "Beginner",
        duration: "10 Weeks",
        schedule: "Tue/Thu 17:30 - 19:30",
        topics: ["Past Tense", "Giving Directions", "Health & Body", "Travel Vocabulary"],
        id: "a2-elem"
    },
    {
        name: "German B1: Intermediate",
        level: "Intermediate",
        duration: "12 Weeks",
        schedule: "Saturdays 09:00 - 13:00",
        topics: ["Subordinate Clauses", "Workplace German", "Politics & History", "Expressing Opinions"],
        id: "b1-inter"
    }
];

const container = document.querySelector("#course-container");

// Renamed to filterCourses to match your HTML button onclick events
function filterCourses(filter) {
    container.innerHTML = ""; // 10. DOM Manipulation: Clear previous content

    // 13. Array Method (.filter)
    const filtered = filter === 'all' ? courses : courses.filter(c => c.level === filter);

    filtered.forEach(course => {
        const card = document.createElement("div");
        card.className = "card";

        // 14. Template Literals
        card.innerHTML = `
            <h3>${course.name}</h3>
            <p><strong>Duration:</strong> ${course.duration}</p>
            <p><strong>Schedule:</strong> ${course.schedule}</p>
            <div class="topics">
                <h4>Course Content:</h4>
                <ul>
                    ${course.topics.map(topic => `<li>${topic}</li>`).join('')}
                </ul>
            </div>
            <button onclick="saveCourse('${course.name}')">Save for Later</button>
        `;
        container.appendChild(card);
    });
}

// 15. localStorage
function saveCourse(name) {
    let favs = JSON.parse(localStorage.getItem("favCourses")) || [];

    // 11. Conditional Branching
    if (!favs.includes(name)) {
        favs.push(name);
        localStorage.setItem("favCourses", JSON.stringify(favs));

        alert(`${name} has been added to your favorites!`);
        updateFavoriteDisplay();
    } else {
        alert(`${name} is already in your favorites.`);
    }
}

function updateFavoriteDisplay() {
    const favList = document.querySelector("#fav-list");
    if (favList) {
        let favs = JSON.parse(localStorage.getItem("favCourses")) || [];
        favList.innerHTML = favs.map(fav => `<li>${fav}</li>`).join('');
    }
}

// Initial calls - calling the correct function name now
filterCourses('all');
updateFavoriteDisplay();