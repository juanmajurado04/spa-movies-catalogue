import Home from '../src/pages/home';

const main_section  = document.getElementById('ul-container');

const loadMoreMovies = async () => {
    let page = sessionStorage.getItem('page');
    page += 1;
    sessionStorage.setItem('page', page);
    main_section.innerHTML += await Home();
}    

export default loadMoreMovies;