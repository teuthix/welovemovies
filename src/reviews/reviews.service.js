const knex = require("../db/connection");
const mapProperties = require("../utils/map-properties");

const addCritic = mapProperties({
    organization_name: "critic.organization_name",
    preferred_name: "critic.preferred_name",
    surname: "critic.surname",
});

function read(review_Id) {
    return knex("reviews").select("*").where({ "review_Id": review_Id }).first();
}

function update(updatedReview) {
    return knex("reviews as r")
        .leftJoin("critics as c", "c.critic_id", "r.critic_id")
        .select("r.content", "r.created_at", "c.preferred_name", "c.surname", "c.organization_name", "r.critic_id", "r.movie_id", "r.review_id", "r.score", "r.updated_at")
        .where({ review_id: updatedReview.review_id })
        // .first()
        // .then(addCritic);
        // .update(updatedReview, "*");
        // .select("*")
        // .where({ review_id: updatedReview.review_id })
        // .then((updated) => updated[0]);
}

function getReviewCritic(review_id){
    return knex("reviews as r")
        .leftJoin("critics as c", "c.critic_id", "r.critic_id")
        .select("r.content", "r.created_at", "c.preferred_name", "c.surname", "c.organization_name", "r.critic_id", "r.movie_id", "r.review_id", "r.score", "r.updated_at")
        .where({ review_id: review_id })
        .first()
        .then(addCritic);
}

module.exports = {
    read,
    update,
    getReviewCritic,
};