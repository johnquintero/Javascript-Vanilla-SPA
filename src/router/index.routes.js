import { pages }  from '../controllers/index.controller'

let root = document.getElementById('home');

const router = async (route) => {
    // limpia el content antes de volverlo apintar
    root.innerHTML = '';

    switch(route){
        case '#/':
            return root.appendChild(pages.home());
        case '#/products':
            return console.log('products');    
        case '#/posts':
            return root.appendChild(await pages.posts());
        default:
            return root.appendChild(pages.notfount());
    }
};
 export {router};