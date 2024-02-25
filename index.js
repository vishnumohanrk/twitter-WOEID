const data = require('./data');

// console.log(data.length);
// console.log([...new Set(data.map(({ name }) => name))].length);

const getSingleWOEID = cityName => {
  let woeidData = data.filter(i => i.name.toLowerCase() === cityName.toLowerCase());
  return woeidData[0];
};
const getAllWOEID = countryName =>
  data.filter(i => i.country.toLowerCase() === countryName.toLowerCase());

module.exports = { getAllWOEID, getSingleWOEID };
