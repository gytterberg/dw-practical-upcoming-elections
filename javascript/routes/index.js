var express = require('express');
var axios = require('axios');
var router = express.Router();
var postalAbbreviations = require('../us_state.js');
var { addressToOCDs } = require('./util');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Find My Election',
    states: postalAbbreviations,
  });
});

/* POST address search */
router.post('/search', async function (req, res, next) {
  let ocds = addressToOCDs({
    street: req.body.street,
    street2: req.body['street-2'],
    city: req.body.city,
    state: req.body.state,
    zip: req.body.zip,
  });

  const config = {
    headers: { Accept: 'application/json' },
  };
  try {
    const response = await axios.get(
      `https://api.turbovote.org/elections/upcoming?district-divisions=${ocds}`,
      config
    );
    res.render('results', {
      results: response.data,
      empty: response.data.length === 0,
    });
  } catch (error) {
    res.render('error', { message: 'Error finding results:', error });
  }
});

module.exports = router;
