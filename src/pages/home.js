import getData from '../../utils/getData';

//Generar el home a partir de los datos de la api
const Home = async (search = null) => {
    document.getElementById("back-arrow").className = "hide";
    document.getElementById('load-button-container').className = "load-button-container";  
    const { data: { movies } } = search ? await getData(null, search) : await getData();

    let view = `
        <ul class="movies-container">
            ${movies.map(movie => 
            `
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
};

export default Home;