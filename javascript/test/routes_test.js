var tap = require('tap');
var axios = require('axios');

async function runAsyncTests() {
  const config = {
    headers: { Accept: 'application/json' },
  };

  var { data } = await axios.get(
    'https://api.turbovote.org/elections/upcoming?district-divisions=ocd-division/country:us/state:sc/place:rock_hill',
    config
  );

  tap.equal(
    data.length,
    1,
    'returned one result for Rock Hill, SC (as of 10/14/21)'
  );

  tap.equal(
    data[0].description,
    'Rock Hill Mayoral Election',
    'Got Rock Hill Mayoral Election'
  );
}

runAsyncTests();
