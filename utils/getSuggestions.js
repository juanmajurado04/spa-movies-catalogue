const API = 'https://yts.mx/api/v2/';

const getSuggestions = async (id) => {

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

export default getSuggestions;