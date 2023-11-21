const moviesService = require("./movies.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function isShowing(req, res, next) {
    const movie = await moviesService.read(req.params.movie_id);
    console.log(movie)
    if(movie) {
        res.locals.movie = movie;
        return next();
    }
    next({ status: 404, message: "Movie not found" });
}

async function list(req, res, next) {
    const data = await moviesService.list();
    res.json({ data });
}

module.exports = {
    list: asyncErrorBoundary(list),
};