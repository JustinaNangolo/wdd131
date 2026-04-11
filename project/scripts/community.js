// 1. DOM Interaction: Selecting elements
const form = document.querySelector("#buddy-form");
const board = document.querySelector("#visitor-board");

// 2. Initialize the board from localStorage on load
let posts = JSON.parse(localStorage.getItem("communityPosts")) || [];

function displayPosts() {
    board.innerHTML = ""; // Clear board before re-rendering

    // 3. Using Array Methods (forEach)
    posts.forEach((post) => {
        const postCard = document.createElement("div");
        postCard.className = "card";

        // 4. Using Template Literals exclusively for output
        postCard.innerHTML = `
            <h3>${post.name} (${post.level})</h3>
            <p>"${post.msg}"</p>
            <span class="post-date">Posted on: ${post.date}</span>
        `;
        board.appendChild(postCard);
    });
}

// 5. Event Listener & Functionality
form.addEventListener("submit", (e) => {
    e.preventDefault();

    // 6. Creating a JavaScript Object
    const newPost = {
        name: document.querySelector("#username").value,
        level: document.querySelector("#userlevel").value,
        msg: document.querySelector("#message").value,
        date: new Date().toLocaleDateString()
    };

    // 7. Conditional Branching (preventing empty messages)
    if (newPost.msg.length > 5) {
        posts.push(newPost);

        // 8. Using localStorage to save data
        localStorage.setItem("communityPosts", JSON.stringify(posts));

        displayPosts();
        form.reset();
    } else {
        alert("Please write a slightly longer message for the community!");
    }
});

// Initial display call
displayPosts();