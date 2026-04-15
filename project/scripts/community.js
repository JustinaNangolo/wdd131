
const form = document.querySelector("#buddy-form");
const board = document.querySelector("#visitor-board");


let posts = JSON.parse(localStorage.getItem("communityPosts")) || [];

function displayPosts() {
    board.innerHTML = ""; 

    
    posts.forEach((post) => {
        const postCard = document.createElement("div");
        postCard.className = "card";

        
        postCard.innerHTML = `
            <h3>${post.name} (${post.level})</h3>
            <p>"${post.msg}"</p>
            <span class="post-date">Posted on: ${post.date}</span>
        `;
        board.appendChild(postCard);
    });
}


form.addEventListener("submit", (e) => {
    e.preventDefault();

  
    const newPost = {
        name: document.querySelector("#username").value,
        level: document.querySelector("#userlevel").value,
        msg: document.querySelector("#message").value,
        date: new Date().toLocaleDateString()
    };

    
    if (newPost.msg.length > 5) {
        posts.push(newPost);

       
        localStorage.setItem("communityPosts", JSON.stringify(posts));

        displayPosts();
        form.reset();
    } else {
        alert("Please write a slightly longer message for the community!");
    }
});

// Initial display call
function displayPosts() {
    const board = document.querySelector("#visitor-board");
    board.innerHTML = "";

    posts.forEach((post, index) => {
        const postCard = document.createElement("div");
        postCard.className = "card";

        postCard.innerHTML = `
            <h3>${post.name} (${post.level})</h3>
            <p>"${post.msg}"</p>
            
            <div class="post-actions">
                <button onclick="toggleReply(${index})" class="action-btn">💬 Reply</button>
            </div>

            <div id="reply-box-${index}" class="reply-container" style="display: none;">
                <textarea id="reply-text-${index}" placeholder="Write your reply..."></textarea>
                <button onclick="submitReply(${index})" class="btn-primary">Send</button>
            </div>

            <div id="replies-list-${index}" class="replies-display">
                ${(post.replies || []).map(r => `<p class="reply-item"><strong>Admin:</strong> ${r}</p>`).join('')}
            </div>

            <span class="post-date">Posted on: ${post.date}</span>
        `;
        board.appendChild(postCard);
    });
}



function toggleReply(index) {
    const box = document.querySelector(`#reply-box-${index}`);
    box.style.display = (box.style.display === "none") ? "block" : "none";
}

function submitReply(index) {
    const replyInput = document.querySelector(`#reply-text-${index}`);
    const replyValue = replyInput.value;

    if (replyValue.trim() !== "") {
        if (!posts[index].replies) {
            posts[index].replies = [];
        }

        posts[index].replies.push(replyValue);

        localStorage.setItem("communityPosts", JSON.stringify(posts));

        
        displayPosts();
    }
}