const data = require('./data');

const getSingleWOEID = cityName => {
  return data.filter(i => i.name.toLowerCase() === cityName.toLowerCase());
}
const getAllWOEID = countryName => {
  return data.filter(i => i.country.toLowerCase() === countryName.toLowerCase());
}
module.exports = { getAllWOEID, getSingleWOEID };
