document.addEventListener("DOMContentLoaded", () => {
    fetch("posts.json")
        .then(res => res.json())
        .then(posts => {
            const container = document.getElementById("posts-container");
            container.innerHTML = posts.map(post => `
                <div class="post-card">
                    <img src="${post.image}" alt="${post.title}">
                    <div class="post-body">
                        <h4>${post.title}</h4>
                        <p class="excerpt">${post.excerpt}</p>
                        <a href="${post.link}" class="read">Read more</a>
                    </div>
                </div>
            `).join("");
        })
        .catch(err => console.error("Error loading posts:", err));
});
