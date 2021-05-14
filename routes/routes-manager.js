import Footer from '../src/templates/footer';
import getPath from '../utils/getPath';
import resolveRoutes from '../utils/resolveRoutes';
import Home from '../src/pages/home'
import showSearchs from '../src/pages/showSearchs'
import Detail from '../src/pages/detail'
import Error404 from '../src/pages/404'
import Loading from '../src/templates/loading'

const footer_section = document.getElementById('footer-section');
const main_section  = document.getElementById('ul-container');

const paths = {
    '/' : Home,
    '/search' : showSearchs,
    '/movie' : Detail,
}

const router = async () => {
    footer_section.innerHTML = null || await Footer();

    let route = resolveRoutes(getPath());
    let render = paths[route] ? paths[route] : Error404;
    main_section.innerHTML = Loading();
    main_section.innerHTML = await render();
}

export default router;