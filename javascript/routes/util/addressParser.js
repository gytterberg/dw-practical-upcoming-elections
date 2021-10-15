// process raw address data into as many OCD IDs as possible
// returns a comma demlimited string of OCD IDs

function addressToOCDs(address) {
  const street = address.street.toLowerCase().trim().replaceAll(/\s+/g, '_');
  const street2 = address.street.toLowerCase().trim().replaceAll(/\s+/g, '_');
  const city = address.city.toLowerCase().trim().replaceAll(/\s+/g, '_');
  const state = address.state.toLowerCase();
  const zip = address.zip.trim();
  const results = [];
  if (state === '' || state === '' || zip === '') {
    return results;
  } else {
    results.push(`ocd-division/country:us/state:${state}`);
    results.push(`ocd-division/country:us/state:${state}/place:${city}`);
  }
  return results.join(',');
}

module.exports = addressToOCDs;
