const knex = require("../db/connection");
const reduceProperties = require("../utils/reduce-properties");

const reduceMovies = reduceProperties("theater_id", {
  rating: ["movies", null, "rating"],
  runtime_in_minutes: ["movies", null, "runtime_in_minutes"],
  title: ["movies", null, "title"],
  theater_id: ["movies", null, "theater_id"],
});

// SEEMS TO WORK?
function list() {
  return knex("theaters as t")
    .join("movies_theaters as mt", "t.theater_id", "mt.theater_id")
    .join("movies as m", "m.movie_id", "mt.movie_id")
    .select(
      "t.address_line_1",
      "t.address_line_2",
      "t.city",
      "t.name",
      "t.state",
      "t.zip",
      "m.rating",
      "m.runtime_in_minutes",
      "m.title",
      "mt.theater_id"
    )
    .then((theaters) => reduceMovies(theaters));
}

module.exports = {
  list,
};

[
  {
    address_line_1: "801 C St.",
    address_line_2: "",
    city: "Vancouver",
    movies: [
      {
        "movie.rating": "PG",
        "movie.runtime_in_minutes": 125,
        "movie.title": "Spirited Away",
        "movies_theaters.theater_id": 1,
      },
      {
        "movie.rating": "PG-13",
        "movie.runtime_in_minutes": 169,
        "movie.title": "Interstellar",
        "movies_theaters.theater_id": 1,
      },
      {
        "movie.rating": "PG",
        "movie.runtime_in_minutes": 112,
        "movie.title": "Rear Window",
        "movies_theaters.theater_id": 1,
      },
      {
        "movie.rating": "PG",
        "movie.runtime_in_minutes": 115,
        "movie.title": "Raiders of the Lost Ark",
        "movies_theaters.theater_id": 1,
      },
      {
        "movie.rating": "PG",
        "movie.runtime_in_minutes": 117,
        "movie.title": "Spider-Man: Into the Spider-Verse",
        "movies_theaters.theater_id": 1,
      },
      {
        "movie.rating": "R",
        "movie.runtime_in_minutes": 106,
        "movie.title": "Whiplash",
        "movies_theaters.theater_id": 1,
      },
      {
        "movie.rating": "NR",
        "movie.runtime_in_minutes": 153,
        "movie.title": "Metropolis",
        "movies_theaters.theater_id": 1,
      },
      {
        "movie.rating": "PG",
        "movie.runtime_in_minutes": 96,
        "movie.title": "Up",
        "movies_theaters.theater_id": 1,
      },
      {
        "movie.rating": "PG",
        "movie.runtime_in_minutes": 91,
        "movie.title": "Monty Python and the Holy Grail",
        "movies_theaters.theater_id": 1,
      },
      {
        "movie.rating": "PG",
        "movie.runtime_in_minutes": 91,
        "movie.title": "Pan's Labyrinth",
        "movies_theaters.theater_id": 1,
      },
      {
        "movie.rating": "PG",
        "movie.runtime_in_minutes": 105,
        "movie.title": "Dial M for Murder",
        "movies_theaters.theater_id": 1,
      },
      {
        "movie.rating": "R",
        "movie.runtime_in_minutes": 132,
        "movie.title": "V for Vendetta",
        "movies_theaters.theater_id": 1,
      },
      {
        "movie.rating": "PG-13",
        "movie.runtime_in_minutes": 127,
        "movie.title": "Jurassic Park",
        "movies_theaters.theater_id": 1,
      },
      {
        "movie.rating": "PG-13",
        "movie.runtime_in_minutes": 117,
        "movie.title": "Blade Runner",
        "movies_theaters.theater_id": 1,
      },
      {
        "movie.rating": "R",
        "movie.runtime_in_minutes": 149,
        "movie.title": "Gone Girl",
        "movies_theaters.theater_id": 1,
      },
      {
        "movie.rating": "R",
        "movie.runtime_in_minutes": 120,
        "movie.title": "Mad Max: Fury Roud",
        "movies_theaters.theater_id": 1,
      },
    ],
    name: "Regal City Center",
    state: "WA",
    zip: "98660",
  },
  {
    address_line_1: "4122 NE Sandy Blvd.",
    address_line_2: "",
    city: "Portland",
    movies: [
      {
        "movie.rating": "PG",
        "movie.runtime_in_minutes": 125,
        "movie.title": "Spirited Away",
        "movies_theaters.theater_id": 2,
      },
      {
        "movie.rating": "PG-13",
        "movie.runtime_in_minutes": 169,
        "movie.title": "Interstellar",
        "movies_theaters.theater_id": 2,
      },
      {
        "movie.rating": "PG",
        "movie.runtime_in_minutes": 112,
        "movie.title": "Rear Window",
        "movies_theaters.theater_id": 2,
      },
      {
        "movie.rating": "PG",
        "movie.runtime_in_minutes": 115,
        "movie.title": "Raiders of the Lost Ark",
        "movies_theaters.theater_id": 2,
      },
      {
        "movie.rating": "PG",
        "movie.runtime_in_minutes": 117,
        "movie.title": "Spider-Man: Into the Spider-Verse",
        "movies_theaters.theater_id": 2,
      },
      {
        "movie.rating": "R",
        "movie.runtime_in_minutes": 106,
        "movie.title": "Whiplash",
        "movies_theaters.theater_id": 2,
      },
      {
        "movie.rating": "NR",
        "movie.runtime_in_minutes": 153,
        "movie.title": "Metropolis",
        "movies_theaters.theater_id": 2,
      },
      {
        "movie.rating": "PG",
        "movie.runtime_in_minutes": 96,
        "movie.title": "Up",
        "movies_theaters.theater_id": 2,
      },
      {
        "movie.rating": "PG",
        "movie.runtime_in_minutes": 91,
        "movie.title": "Monty Python and the Holy Grail",
        "movies_theaters.theater_id": 2,
      },
      {
        "movie.rating": "PG",
        "movie.runtime_in_minutes": 91,
        "movie.title": "Pan's Labyrinth",
        "movies_theaters.theater_id": 2,
      },
      {
        "movie.rating": "PG",
        "movie.runtime_in_minutes": 105,
        "movie.title": "Dial M for Murder",
        "movies_theaters.theater_id": 2,
      },
      {
        "movie.rating": "R",
        "movie.runtime_in_minutes": 132,
        "movie.title": "V for Vendetta",
        "movies_theaters.theater_id": 2,
      },
      {
        "movie.rating": "PG-13",
        "movie.runtime_in_minutes": 127,
        "movie.title": "Jurassic Park",
        "movies_theaters.theater_id": 2,
      },
      {
        "movie.rating": "PG-13",
        "movie.runtime_in_minutes": 117,
        "movie.title": "Blade Runner",
        "movies_theaters.theater_id": 2,
      },
      {
        "movie.rating": "R",
        "movie.runtime_in_minutes": 149,
        "movie.title": "Gone Girl",
        "movies_theaters.theater_id": 2,
      },
      {
        "movie.rating": "R",
        "movie.runtime_in_minutes": 120,
        "movie.title": "Mad Max: Fury Roud",
        "movies_theaters.theater_id": 2,
      },
    ],
    name: "Hollywood Theatre",
    state: "OR",
    zip: "97212",
  },
  {
    address_line_1: "11626 SW Pacific Hwy",
    address_line_2: "",
    city: "Tigard",
    movies: [
      {
        "movie.rating": "PG",
        "movie.runtime_in_minutes": 125,
        "movie.title": "Spirited Away",
        "movies_theaters.theater_id": 3,
      },
      {
        "movie.rating": "PG-13",
        "movie.runtime_in_minutes": 169,
        "movie.title": "Interstellar",
        "movies_theaters.theater_id": 3,
      },
      {
        "movie.rating": "PG",
        "movie.runtime_in_minutes": 112,
        "movie.title": "Rear Window",
        "movies_theaters.theater_id": 3,
      },
      {
        "movie.rating": "PG",
        "movie.runtime_in_minutes": 115,
        "movie.title": "Raiders of the Lost Ark",
        "movies_theaters.theater_id": 3,
      },
      {
        "movie.rating": "PG",
        "movie.runtime_in_minutes": 117,
        "movie.title": "Spider-Man: Into the Spider-Verse",
        "movies_theaters.theater_id": 3,
      },
      {
        "movie.rating": "R",
        "movie.runtime_in_minutes": 106,
        "movie.title": "Whiplash",
        "movies_theaters.theater_id": 3,
      },
      {
        "movie.rating": "NR",
        "movie.runtime_in_minutes": 153,
        "movie.title": "Metropolis",
        "movies_theaters.theater_id": 3,
      },
      {
        "movie.rating": "PG",
        "movie.runtime_in_minutes": 96,
        "movie.title": "Up",
        "movies_theaters.theater_id": 3,
      },
      {
        "movie.rating": "PG",
        "movie.runtime_in_minutes": 91,
        "movie.title": "Monty Python and the Holy Grail",
        "movies_theaters.theater_id": 3,
      },
      {
        "movie.rating": "PG",
        "movie.runtime_in_minutes": 91,
        "movie.title": "Pan's Labyrinth",
        "movies_theaters.theater_id": 3,
      },
      {
        "movie.rating": "PG",
        "movie.runtime_in_minutes": 105,
        "movie.title": "Dial M for Murder",
        "movies_theaters.theater_id": 3,
      },
      {
        "movie.rating": "R",
        "movie.runtime_in_minutes": 132,
        "movie.title": "V for Vendetta",
        "movies_theaters.theater_id": 3,
      },
      {
        "movie.rating": "PG-13",
        "movie.runtime_in_minutes": 127,
        "movie.title": "Jurassic Park",
        "movies_theaters.theater_id": 3,
      },
      {
        "movie.rating": "PG-13",
        "movie.runtime_in_minutes": 117,
        "movie.title": "Blade Runner",
        "movies_theaters.theater_id": 3,
      },
      {
        "movie.rating": "R",
        "movie.runtime_in_minutes": 149,
        "movie.title": "Gone Girl",
        "movies_theaters.theater_id": 3,
      },
      {
        "movie.rating": "R",
        "movie.runtime_in_minutes": 120,
        "movie.title": "Mad Max: Fury Roud",
        "movies_theaters.theater_id": 3,
      },
    ],
    name: "Regal Tigard",
    state: "OR",
    zip: "97223",
  },
];
