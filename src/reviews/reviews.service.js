const knex = require("../db/connection");

function update(updatedReview) {
    return knex("reviews")
        .select("*")
        .where({ review_id: updatedReview.review_id })
        .update(updatedReview, "*")
        .then((updated) => updated[0]);
}

module.exports = {
    update,
};