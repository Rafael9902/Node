const { multiply } = require('./helpers/multiply');

console.clear();

multiply(6)
    .then(file => console.log(file))
    .catch(err => console.error(err))