const knex = require("../db/connection");

function list() {
    return knex("movies").select("*");
};

function showingTrue() {
    return knex("movies as m")
        .join("movies_theaters as mt", "m.movie_id", "mt.movie_id")
        .join("theaters as t", "mt.theater_id", "t.theater_id")
        .select("m.*")
        .where({ "mt.is_showing": true })
        .distinct();
};

function read(movieId) {
    return knex("movies").select("*").where({ "movie_Id": movieId }).first();
}

// function getTheaters(movieId) {
//     return knex("theaters as t")
//         .join("movies_theaters as mt", "t.theater_id", "mt.theater_id")
//         ,join("movies as m", "mt.movie_id", "m.movie_id")
//         .select("t.*")
//         .where({"mt.is_showing": true})
//         .distinct();
// }

function getTheaters(movieId){
    return knex("theaters as t")
        .join("movies_theaters as mt", "t.theater_id", "mt.theater_id")
        .join("movies as m", "mt.movie_id", "m.movie_id")
        .select("t.*", "mt.is_showing", "mt.movie_id")
        .where({ "mt.movie_id": movieId })
        .distinct("t.theater_id");
}


module.exports = {
    list,
    showingTrue,
    read,
    getTheaters,
};