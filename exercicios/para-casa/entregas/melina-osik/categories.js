const MOVIE_RENT_BASE_COST = {
  NEW: 3,
  KIDS: 0.5,
  REGULAR: 1,
}

const MOVIE_RENT_EXTRA_COST = {
  NEW: 1,
  KIDS: 1.5,
  REGULAR: 1.5,
}

const DAYS_WITHOUT_EXTRA_CHARGE = {
  NEW: 0,
  KIDS: 3,
  REGULAR: 2,
}

const MOVIE_CATEGORY = {
  NEW: "lançamento",
  KIDS: "infantil",
  REGULAR: "regular",
}

module.exports = { MOVIE_RENT_BASE_COST, MOVIE_RENT_EXTRA_COST, DAYS_WITHOUT_EXTRA_CHARGE, MOVIE_CATEGORY }
