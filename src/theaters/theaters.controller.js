const theatersService = require("./theaters.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function list(req, res, next) {
    const data = await theatersService.list();
    // console.log(data);
    if (data){
        res.locals.theaters = data;
        next();
    }
    next({ status: 404, message: "Theater cannot be found." });
}

async function getMovies(req, res, next) {
    const theaters = res.locals.theaters;
    //array of theater ids
    const theaterIds = theaters.map((theater) => {
        return theater.theater_id;
    });

    const theaterWithMovies = await Promise.all(theaterIds.map(async (theaterId) => {
        const movies = await theatersService.findMoviesByTheaterId(theaterId);
        return { movies };
    }));
    
    // console.log(theaterWithMovies);
    res.json({ data: theaterWithMovies });
}

// return all theaters, each with the movies playing there
// get all the theaters
// then find all the movies for that theater's id


module.exports = {
    list: [asyncErrorBoundary(list), getMovies],
};