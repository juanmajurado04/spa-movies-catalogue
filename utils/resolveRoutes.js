const resolveRoutes = (path) => {

    if (path == '#/' || path === '')
    {
        return '/';
    }
    
    let extra = path.lastIndexOf('/');
    let route = path.slice(0, extra + 1);

    route = route == '#/movie/' ? '/movie' : route;
    route = route == '#/search/' ? '/search' : route;
    return route;
}

export default resolveRoutes;