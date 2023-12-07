const knex = require("../db/connection");
const mapProperties = require("../utils/map-properties");

const addCritic = mapProperties({
  critic_id: "critic.critic_id",
  preferred_name: "critic.preferred_name",
  surname: "critic.surname",
  organization_name: "critic.organization_name",
  created_at: "critic.created_at",
  updated_at: "critic.updated_at",
});

function list() {
  return knex("movies").select("*");
}

function showingTrue() {
  return knex("movies as m")
    .join("movies_theaters as mt", "m.movie_id", "mt.movie_id")
    .join("theaters as t", "mt.theater_id", "t.theater_id")
    .select("m.*")
    .where({ "mt.is_showing": true })
    .distinct();
}

function read(movieId) {
  return knex("movies").select("*").where({ movie_id: movieId }).first();
}

function getTheaters(movieId) {
  return knex("theaters as t")
    .join("movies_theaters as mt", "t.theater_id", "mt.theater_id")
    .join("movies as m", "mt.movie_id", "m.movie_id")
    .select("t.*", "mt.is_showing", "mt.movie_id")
    .where({ "mt.movie_id": movieId })
    .distinct("t.theater_id");
}

// // get critic info for ONE critic
// function getCritic(criticId) {
//     return knex("reviews as r")
//         .join("critics as c", "r.critic_id", "c.critic_id")
//         .select("c.*")
//         .where({"r.critic_id": criticId});
// }

// get all reviews for movie
function getReviews(movieId) {
  return knex("reviews as r")
    .join("critics as c", "r.critic_id", "c.critic_id")
    .select("r.*", "c.*", "c.created_at as critic_created_at")
    .where({ "r.movie_id": movieId })
    .then((reviews) => reviews.map(addCritic));
}

module.exports = {
  list,
  showingTrue,
  read,
  getTheaters,
  getReviews,
  // getCritic,
};
