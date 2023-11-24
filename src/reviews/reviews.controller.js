const reviewsService = require("./reviews.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function reviewExists(req, res, next) {
    const review = await reviewsService.read(req.params.reviewId);
    if(review) {
        res.locals.review = review;
        return next();
    }
    next({ status: 404, message: "Review cannot be found." });
}

async function update(req, res, next){
    const updatedReview = {
        ...res.locals.review,
        ...req.body.data,
        review_id: res.locals.review.review_id,
    };
    console.log(updatedReview, "test");
    const data = await reviewsService.update(updatedReview);
    res.json({data});
}

module.exports = {
    update: [asyncErrorBoundary(update)],
};