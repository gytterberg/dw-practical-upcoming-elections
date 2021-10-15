var tap = require('tap');
var { addressToOCDs } = require('../routes/util');

var testAddress = {
  street: '443 Centre St',
  'street-2': '',
  city: 'Boston',
  state: 'MA',
  zip: '02130',
};

var ocds = addressToOCDs(testAddress);

tap.equal(ocds.split(',').length, 2, 'Generates 2 OCD IDs from test address');

tap.equal(
  ocds,
  'ocd-division/country:us/state:ma,ocd-division/country:us/state:ma/place:boston',
  'Generates correct OCD IDs for Boston, MA'
);
