const api = new GhostContentAPI({
    url: 'https://www.nathanielrodriguez.me/blog',
    key: '246472dfd4e2e1f36084c99a84',
    version: 'v5.2.3'
});

let p = "";

api.posts.browse({limit: 3, include: 'tags, authors'}).then((posts) => {
    posts.forEach((post) => {
        console.log(post.title);
        console.log(post.excerpt);

        console.log(post);
        p = post;

        document.querySelector(".card-incomplete > figcaption > h2").textContent = post.title;
        document.querySelector(".card-incomplete > figcaption > p").textContent = post.excerpt;

        let feature_img = document.querySelector(".card-incomplete img");
        
        feature_img.setAttribute("src", post.feature_image);
        feature_img.setAttribute("alt", post.feature_image_alt);

        document.querySelector(".card-incomplete").classList.remove("card-incomplete");
    });
})

.catch((err) => {
        console.error(err);
});
