const knex = require("../db/connection");

function list() {
    return knex("movies").select("*");
};

function showingTrue() {
    return knex("movies as m")
        .join("movies_theaters as mt", "m.movie_id", "mt.movie_id")
        .join("theaters as t", "mt.theater_id", "t.theater_id")
        .select("mt.*");
};

function read(movie_Id) {
    return knex("movies").select("*").where({ "movie_Id": movie_Id }).first();
}

module.exports = {
    list,
    showingTrue,
    read,
};