const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "avatar-vangogh.jpg",
        post: "post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "avatar-courbet.jpg",
        post: "post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "avatar-ducreux.jpg",
        post: "post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const mainEl = document.getElementById("main")
let html = ""

for (let i = 0; i < posts.length; i++) {
     html += `
            <article class="post">
                <div class="header container">
                    <img class="avatar" src="${posts[i].avatar}" alt="Vincent Van Gogh Avatar">
                    <div>
                        <div>
                            <span class="name">${posts[i].name}</span>
                        </div>
                        <span class="location">${posts[i].location}</span>
                    </div>
                </div>
                <div>
                    <img class="img" src="${posts[i].post}" alt="self-portrait">
                </div>
                <div class="btn-container container">
                    <img class="heart-btn" id="like-btn" src="images/icon-heart.png" alt="Heart icon">
                    <img class="comment-btn" src="images/icon-comment.png" alt="Comment icon">
                    <img class="dm-btn" src="images/icon-dm.png" alt="DM icon">
                </div>
                <div class="container">
                    <span class="likes" id="likes-el">${posts[i].likes} likes</span>
                </div>
                <div class="container">
                    <p><span class="username">${posts[i].username}</span> ${posts[i].comment}</p>
                </div>
            </article>
            `
}

mainEl.innerHTML = html
