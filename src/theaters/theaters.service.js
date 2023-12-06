const knex = require("../db/connection");
const reduceProperties = require("../utils/reduce-properties");

const reduceMovies = reduceProperties("theater_id", {
    rating: ["movies", null, "movie.rating"],
    runtime_in_minutes: ["movies", null, "movie.runtime_in_minutes"],
    title: ["movies", null, "movie.title"],
    theater_id: ["movies", null, "movies_theaters.theater_id"]
});


// function list() {
//     return knex("theaters").select("*");
// }

// need to get all theaters with all movies showing
// check movies_theaters
function list() {
    return knex("theaters as t")
        .join("movies_theaters as mt", "t.theater_id", "mt.theater_id")
        .join("movies as m", "m.movie_id", "mt.movie_id")
        .select("t.address_line_1", "t.address_line_2", "t.city", "t.name", "t.state", "t.zip", "m.*", "mt.theater_id")
        .then((theaters) => reduceMovies(theaters));
}

// function list() {
//     return knex("theaters as t")
//         .join("movies_theaters as mt", "t.theater_id", "mt.theater_id")
//         .join("movies as m", "m.movie_id", "mt.movie_id")
//         .select("t.*", "m.*")
//         .then(theaters => theaters.map(addMovie));
// }

module.exports = {
    list,
};