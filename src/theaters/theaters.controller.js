const theatersService = require("./theaters.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function list(req, res, next) {
    const theaterId = req.params.theater_id
    const data = await theatersService.list(theaterId);
    // console.log(data);
    if (data){
        res.locals.theaters = data;
        next();
    }
    next({ status: 404, message: "Theater cannot be found." });
}

// async function getMovies(req, res, next) {
//     const theaters = res.locals.theaters;
//     const theaterIds = theaters.map((theater) => {
//         return theater.theater_id;
//     });
    
//     const data = await theatersService.findMoviesByTheaterId(theaterIds);
//     // console.log(theaters);
//     if(data) {
//         res.json({ data: data });
//     }
//     next();
// }

// return all theaters, each with the movies playing there
// get all the theaters
// then find all the movies for that theater's id


module.exports = {
    list: [asyncErrorBoundary(list)],
};