import Home from './home.controller';
import Posts from './posts.controller';
import Products from './products.controller';
import NotFound from './404.controller';

const pages = {
    home : Home,
    posts : Posts,
    products : Products,
    notfount : NotFound

};

export {pages}