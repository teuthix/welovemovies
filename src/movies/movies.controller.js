const moviesService = require("./movies.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function movieExists(req, res, next) {
    const movie = await moviesService.read(req.params.movieId);
    console.log("inside B");
    if(movie) {
        res.locals.movie = movie;
        return next();
    }
    next({ status: 404, message: "movie not found"});
}

async function read(req, res) {
    const { movie: data } = res.locals;
    res.json({ data });
}

async function isShowing(req, res, next) {
    const data = await moviesService.showingProvided();
    // console.log(data);
    // if(movie) {
    //     res.locals.movie = movie;
    //     return next();
    // }
    // next({ status: 404, message: "Movie not found" });
    res.json({ data });
}
// ^ doesn't seem to work
// need to check if is_showing is true in movies_theaters
// if i check that first and its true,  

async function list(req, res, next) {
    const data = await moviesService.list();
    // console.log(data);
    const show = data.some((movie) => movie.is_showing);
    if(show) {
        next();
    }
    res.json({ data });
}

module.exports = {
    read: [asyncErrorBoundary(movieExists), read],
    list: [asyncErrorBoundary(list), isShowing],
};