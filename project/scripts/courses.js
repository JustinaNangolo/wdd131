// 12. JavaScript Objects & 13. Arrays
const courses = [
    { id: 1, name: "German A1 Beginner", level: "Beginner", desc: "Start your journey." },
    { id: 2, name: "German B2 Intermediate", level: "Advanced", desc: "Master the grammar." },
    { id: 3, name: "German C1 Fluent", level: "Advanced", desc: "Professional fluency." }
];

const container = document.querySelector("#course-container");

function displayCourses(filter) {
    container.innerHTML = ""; // 10. DOM Manipulation (selecting & modifying)

    // 13. Array Method (.filter)
    const filtered = filter === 'all' ? courses : courses.filter(c => c.level === filter);

    filtered.forEach(course => {
        const card = document.createElement("div");
        card.className = "card";

        // 14. Template Literals
        card.innerHTML = `
            <h3>${course.name}</h3>
            <p>${course.desc}</p>
            <button onclick="saveCourse('${course.name}')">Save for Later</button>
        `;
        container.appendChild(card);
    });
}

// 15. localStorage
function saveCourse(name) {
    let favs = JSON.parse(localStorage.getItem("favCourses")) || [];
    if (!favs.includes(name)) { // 11. Conditional Branching
        favs.push(name);
        localStorage.setItem("favCourses", JSON.stringify(favs));
        alert(`${name} saved!`);
    }
}

// Initial call
displayCourses('all');