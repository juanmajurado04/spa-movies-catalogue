import './styles/styles.css';
import router from '../routes/routes-manager';
import makeSearch from '../utils/makeSearch';
import loadMoreMovies from '../utils/loadMoreMovies';

sessionStorage.setItem('page', 1);

window.addEventListener('load', router);
window.addEventListener('hashchange', router);
const search_form = document.getElementById('search-form');
search_form.addEventListener('submit', makeSearch);
const load_button = document.getElementById('load-button');
load_button.addEventListener('click', loadMoreMovies);