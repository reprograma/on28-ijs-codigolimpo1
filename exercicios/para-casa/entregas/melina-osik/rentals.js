const {
  MOVIE_RENT_BASE_COST,
  MOVIE_RENT_EXTRA_COST,
  DAYS_WITHOUT_EXTRA_CHARGE,
} = require('./categories')

function calculateRentalCost(movies, rentalDays) {
  let totalAmount = 0
  for (let movie of movies) {
    const category = movie.category.toUpperCase()
    const daysWithoutExtraCharge = DAYS_WITHOUT_EXTRA_CHARGE[category]
    const hasExtraCharge = rentalDays > daysWithoutExtraCharge
    const initialCost = MOVIE_RENT_BASE_COST[category]
    const extraCost = (rentalDays - daysWithoutExtraCharge) * MOVIE_RENT_EXTRA_COST[category]
    console.log(daysWithoutExtraCharge)
    console.log(rentalDays)
    console.log(hasExtraCharge)
    totalAmount += hasExtraCharge ? initialCost + extraCost : initialCost
  }
  return totalAmount
}

module.exports = { calculateRentalCost }