import views from '../views/posts.html';

const getPosts = async () => {
    const resp = await fetch('https://jsonplaceholder.typicode.com/posts');         
    return await resp.json();
}

export default async () =>{
    const divElement = document.createElement('div');
    divElement.innerHTML = views;
    const posts = await getPosts();
    const ulposts = divElement.querySelector('#listaPosts');
    const totalposts = divElement.querySelector('#totalpost');

    totalposts.innerHTML = posts.length;

    posts.forEach(post => {
        ulposts.innerHTML += `
            <li class="list-group-item border-primary bg-dark">
            <h2>${post.title}</h2>
            <p>${post.body}</p>
            </li>`
    });


    // console.log(posts);
    return divElement;
};