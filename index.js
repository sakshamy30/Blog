const container = document.querySelector(".blogs")
const searchForm = document.querySelector(".search")

const renderPost = async (term) => {
    let url = "http://localhost:3000/posts?_sort=likes"
    if(term) {
        url += `&q=${term}`;
    }

    const res = await fetch(url)
    const posts = await res.json()
    console.log(posts);

    let template = "";
    posts.forEach(post => {
        template += `
            <div class="post">
                <h2>${post.title}</h2>
                <p><small>${post.likes} likes</small></p>
                <p>${post.body.slice(0,200)}</p>
                <a href="./details.html?id=${post.id}">read more...</a>
            </div>
        `
    })

    container.innerHTML = template;
}

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    renderPost(searchForm.term.value.trim())
})

window.addEventListener("load", () => renderPost())