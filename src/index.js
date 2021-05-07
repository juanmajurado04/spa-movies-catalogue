const section = document.getElementById("ul-container");
const div_loading = document.getElementById("loading");
const API = 'https://yts.mx/api/v2/';
let home_img = document.getElementById("home-img");
let url = location.href;

// Trayendo la info. de la api
const getData = async (id = null, search = null) => {                                                                 

    let use_api;

    if (id === null && search === null)
    {
        use_api = `${API}list_movies.json`;
    }
    else
    {
        id ? use_api = `${API}movie_details.json?movie_id=${id}`: null;
        search ? use_api = `${API}list_movies.json?query_term=${search}`: null;
    }
    
    try
    {
        const response = await fetch(use_api);
        const data = await response.json();
        console.log(data);
        return data;
    }
    catch(error)
    {
        console.error(error);
    }
};

const showSuggestions = async (id) => {

    let suggestion = `${API}movie_suggestions.json?movie_id=${id}`;
    try
    {
        let response = await fetch(suggestion);
        let data = await response.json();
        return data;
    }
    catch (error)
    {
        console.error(error);
    }
}

const loading = () => {
    const view = `
        <span></span>
        <span></span>
        <span></span>
    `;
    return view;
}

//Generar el home a partir de los datos de la api
const List = async (search = null) => {  
    const { data } = search ? await getData(null, search) : await getData();                                                                 
    let view = `
        <ul class="movies-container">
            ${data.movies.map(movie => `
            <li class="movie-home">
                <a onclick="clickMovie(${movie.id})">
                    <img src='${movie.medium_cover_image}' id="home-img" loading="lazy">
                </a>
                    <h4>${movie.title}</h4>
                    <h6>${movie.year}</h6>
            </>
            `)}
        </ul>
    `;

    section.innerHTML = view;
};

//Inyectar el detalle de la pelicula
const clickMovie = async (id) =>                                      
{
   section.innerHTML = await showDetail(id);
}

//Solciitar data y generar html
const showDetail = async (id) => {
    const { data: { movies } } = await showSuggestions(id);                  
    const { data: { movie } } =  await getData(id, null);
    console.log(movie);
    const view = `
    <section class="movie-detail-container">
    <div class="movie-detail">
        <img src="${movie.large_cover_image}" alt="">
        <div class="info">
            <h1>${movie.title}</h1>
            <h3>${movie.year}</h3>
            <h4>${movie.genres.join(" / ")}</h4>
            <h5>${movie.description_intro}</h5>
        </div>
    </div>
    </section>
    <hr class="line"></hr>
    <h1>Suggested movies</h1>
    <div class="suggestions">       
        ${movies.map(movie => `
            <div class="suggestion-items">
                <img src="${movie.medium_cover_image}" onclick="clickMovie(${movie.id})" loading="lazy"></img>
                <h2>${movie.title}</h2>
            </div>
        `).join(' ')}
    <div>
  
    `;
    window.scrollTo(0,0);
    return view;
}

 //Buscar peliculas usando la barra de busqueda
const searchMovie = async (event) =>                                       
{
    const form = document.getElementById("form");
    const textbox = document.getElementById("text-box");
    event.preventDefault();
    let search = textbox.value;
    List(search);
    form.reset();
}

List();
form.addEventListener("submit", searchMovie);