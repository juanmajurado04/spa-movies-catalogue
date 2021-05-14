const API = 'https://yts.mx/api/v2/';


// Trayendo la info. de la api
const getData = async (id = null, search = null) => {                                                                 

    let use_api;
    let page = sessionStorage.getItem('page');

    if (id === null && search === null)
    {
        use_api = `${API}list_movies.json?page=${page}`;
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

export default getData;