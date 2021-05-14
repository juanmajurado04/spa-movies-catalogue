const Error404 = () => {
    document.getElementById("back-arrow").className = "hide";
    document.getElementsByClassName('load-button-container').className = "hide";
    let view = `
         <div class="arrow-container">
            <img src="../img/arrow-back.svg" alt="go back" class="arrow-back" onclick="history.go(-1)">
        </div>
        <div class="error-404">
            <h1>Error 404</h1>
            <h2>Page not found</h2>
        </div>    
    `;
    return view;
}

export default Error404;