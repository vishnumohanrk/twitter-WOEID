const { getAllWOEID, getSingleWOEID } = require('./index');

console.log(getAllWOEID('united states'));
console.log(getAllWOEID('japan'));

console.log(getSingleWOEID('united states'));
console.log(getSingleWOEID('india'));

console.log(getSingleWOEID('new york'));
