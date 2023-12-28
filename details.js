const details = document.querySelector(".details")
const deleteBtn = document.querySelector(".delete")

const id = new URLSearchParams(window.location.search).get("id");

const renderDetails = async () => {
    const res = await fetch("http://localhost:3000/posts/"+id)
    const post = await res.json()
    console.log(post);

    const template = `
        <h1>${post.title}</h1>
        <p>${post.body}</p>
    `

    details.innerHTML = template;
}

deleteBtn.addEventListener("click", async (e) => {
    res = await fetch("http://localhost:3000/posts/"+id, {
        method: "DELETE"
    })
    window.location.replace("./index.html")
})

window.addEventListener("load", () => renderDetails())