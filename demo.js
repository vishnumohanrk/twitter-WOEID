const { getAllWOEID, getSingleWOEID } = require('./index');

console.log(getAllWOEID('canada'));
console.log(getAllWOEID('japan'));

console.log(getSingleWOEID('united states'));
console.log(getSingleWOEID('india'));

console.log(getSingleWOEID('chicago'));

const [{ woeid }] = getSingleWOEID('chennai');
console.log(`* See the demo.js/readme *\nWOEID of Chennai: ${woeid}`);
