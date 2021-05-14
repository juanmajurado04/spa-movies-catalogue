import getSuggestions from '../../utils/getSuggestions';
import getData from '../../utils/getData';

//Solciitar data y generar html
const Detail = async () => {
    let URL = window.location.href;
    let id = URL.slice(URL.lastIndexOf('/') + 1, URL.length);

    const { data: { movies } } = await getSuggestions(id);                  
    const { data: { movie } } =  await getData(id, null);

    document.getElementById("back-arrow").className = "arrow-container";  
    document.getElementById('load-button-container').className = "hide";

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
                <a href="#/movie/${movie.id}">
                    <img src="${movie.medium_cover_image}" loading="lazy"></img>
                </a>
                <h2>${movie.title}</h2>
            </div>
        `).join(' ')}
    <div>
  
    `;
    window.scrollTo(0,0);
    return view;
}

export default Detail;