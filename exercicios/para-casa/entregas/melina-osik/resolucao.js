const movies = require('./movies')
const { calculateRentalCost } = require('./rentals')

const totalCost = calculateRentalCost([movies.F001, movies.F002, movies.F003], 7)
console.log(`Amount owed is ${totalCost}`)