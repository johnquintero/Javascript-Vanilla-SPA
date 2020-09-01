import 'bootstrap/dist/css/bootstrap.min.css';
import './style.scss';
import { router } from './router/index.routes';

router(window.location.hash);

window.addEventListener('hashchange', ()=>{
   router(window.location.hash);
});