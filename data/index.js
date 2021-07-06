const parseText = require('../src/parseText');

const bac2015 = require('./2015');
const bac2016 = require('./2016');
const bac2016all = require('./2016-all');
const bac2017 = require('./2017');
const bac2018 = require('./2018');
const bac2019 = require('./2019');

const data = [].concat(
  parseText(bac2015, '2015'),
  parseText(bac2016, '2016'),
  parseText(bac2016all, '2016 all'),
  parseText(bac2017, '2017'),
  parseText(bac2018, '2018'),
  parseText(bac2019, '2019')
);

module.exports = data;
