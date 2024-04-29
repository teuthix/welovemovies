const moviesService = require("./movies.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function movieExists(req, res, next) {
  const movie = await moviesService.read(req.params.movieId);
  if (movie) {
    res.locals.movie = movie;
    return next();
  }
  next({ status: 404, message: "Movie cannot be found." });
}

async function read(req, res) {
  const { movie: data } = res.locals;
  res.json({ data });
}

async function isShowing(req, res, next) {
  const showParam = req.query.is_showing;
  if (showParam === "true") {
    res.locals.isShowing = true;
  }
  next();
}

async function list(req, res, next) {
  const data = await moviesService[
    res.locals.isShowing ? "showingTrue" : "list"
  ]();
  res.json({ data });
}

// a function to get all the theaters the given movieId is playing at
async function getTheaters(req, res, next) {
  const data = await moviesService.getTheaters(req.params.movieId);
  if (data) {
    res.json({ data });
    return;
  }
  next();
}

// get the reviews for the movie
// for each review, get the critic's information
async function getReviews(req, res, next) {
  // reviews is an array of objects
  const data = await moviesService.getReviews(req.params.movieId);
  if (data) {
    res.json({ data });
    return;
  }
  next();
}

module.exports = {
  read: [asyncErrorBoundary(movieExists), read],
  list: [asyncErrorBoundary(isShowing), list],
  theaters: asyncErrorBoundary(getTheaters),
  reviews: asyncErrorBoundary(getReviews),
};
