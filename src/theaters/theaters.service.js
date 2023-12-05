const knex = require("../db/connection");
const mapProperties = require("../utils/map-properties");

const addMovie = mapProperties({
    movie_id: "movie.movie_id",
    title: "movie.title",
    runtime_in_minutes: "movie.runtime_in_minutes",
    rating: "movie.rating",
    description: "movie.description",
    image_url: "movie.image_url",
    created_at: "movie.created_at",
    updated_at: "movie.updated_at",
    is_showing: "movie.is_showing",
    // theater_id: "movie.theater_id",
});

function findMoviesByTheaterId(theater_id) {
    return knex("theaters as t")
        .join("movies_theaters as mt", "t.theater_id", "mt.theater_id")
        .join("movies as m", "m.movie_id", "mt.movie_id")
        .select("m.*")
        .where({ "t.theater_id": theater_id });
}

// function list() {
//     return knex("theaters").select("*");
// }

function list(theater_id) {
    return knex("theaters as t")
        .join("movies_theaters as mt", "t.theater_id", "mt.theater_id")
        .join("movies as m", "m.movie_id", "mt.movie_id")
        .select("t.*", "t.theater_id", "m.*")
        .where({ "t.theater_id": theater_id })
        .then(addMovie);
}

module.exports = {
    findMoviesByTheaterId,
    list,
};