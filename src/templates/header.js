const Header = () => {
    const view = `
    <a href="#/">
        <h1>Movies Catalogue</h1>
    </a>
    <form action="" id="search-form">
        <section class="search-bar-container">
        <div class="search-bar">
            <img src="https://cdn1.iconfinder.com/data/icons/hawcons/32/698956-icon-111-search-512.png" alt="">
            <input type="text" name="" id="text-box" class="search-textbox" placeholder="Quick search">
            <button type="submit" id=""></button>
        </div>
        </section>
     </form>
    `;
    return view;
}

export default Header;