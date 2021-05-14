import getData from '../../utils/getData';
 
 const main_section  = document.getElementById('ul-container'); 

//Buscar peliculas usando la barra de busqueda
 const showSearchs = async () => {
    let search_position = location.href.lastIndexOf('/');
    let search = location.href.slice(search_position + 1);

    document.getElementById("back-arrow").className = "arrow-container"; 
    document.getElementById('load-button-container').className = "hide";

    const { data } = search ? await getData(null, search) : await getData(null, search);

    if (data.movie_count == 0)
    {
        return `<h1>Movie not found</h1>`
    }

    let view = `
        <ul class="movies-container">
        ${data.movies.map(movie => `
        <li class="movie-home">
            <a href="#/movie/${movie.id}">
                <img src='${movie.medium_cover_image}' id="home-img" loading="lazy">
            </a>
                <h4>${movie.title}</h4>
                <h6>${movie.year}</h6>
        </>
        `)}
        </ul>
    `;
    return view;
 }

 export default showSearchs;