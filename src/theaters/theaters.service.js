const knex = require("../db/connection");

function findMoviesByTheaterId(theater_id) {
    return knex("theaters as t")
        .join("movies_theaters as mt", "t.theater_id", "mt.theater_id")
        .join("movies as m", "m.movie_id", "mt.movie_id")
        .select("m.*")
        .where({ "t.theater_id": theater_id });
}

// function showingTrue() {
//     return knex("movies as m")
//         .join("movies_theaters as mt", "m.movie_id", "mt.movie_id")
//         .join("theaters as t", "mt.theater_id", "t.theater_id")
//         .select("m.*")
//         .where({ "mt.is_showing": true })
//         .first();
// };

function list() {
    return knex("theaters").select("*");
}

module.exports = {
    findMoviesByTheaterId,
    list,
};