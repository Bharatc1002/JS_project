
const _ = require('lodash');

const serve = [1,[2,[3,[4]]]];

const makeEasy = _.flatten(serve);
console.log(makeEasy);