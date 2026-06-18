let posts = JSON.parse(localStorage.getItem("posts")) || [];

// Load posts on start
window.onload = function () {
    renderPosts();
};

function addPost() {
    let title = document.getElementById("title").value;
    let content = document.getElementById("content").value;

    if (title === "" || content === "") {
        alert("Please fill in all fields");
        return;
    }

    let post = {
        id: Date.now(),
        title: title,
        content: content
    };

    posts.unshift(post);
    localStorage.setItem("posts", JSON.stringify(posts));

    document.getElementById("title").value = "";
    document.getElementById("content").value = "";

    renderPosts();
}

function renderPosts() {
    let container = document.getElementById("posts");
    container.innerHTML = "";

    posts.forEach(post => {
        container.innerHTML += `
            <div class="post">
                <h2>${post.title}</h2>
                <p>${post.content}</p>
                <button class="delete" onclick="deletePost(${post.id})">Delete</button>
            </div>
        `;
    });
}

function deletePost(id) {
    posts = posts.filter(post => post.id !== id);
    localStorage.setItem("posts", JSON.stringify(posts));
    renderPosts();
}
