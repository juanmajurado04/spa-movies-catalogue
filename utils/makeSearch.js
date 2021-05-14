import showSearchs from '../src/pages/showSearchs';

const makeSearch = (event) => {
    const form = document.getElementById("search-form");
    const text_box = document.getElementById("text-box");
    event.preventDefault();
    let search = text_box.value.toLowerCase();
    location.href = `index.html#/search/${search}`;
    form.reset();
};

export default makeSearch;