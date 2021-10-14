# Democracy Works Practical: Upcoming Elections

This is a server-side web application written in JavaScript with
[Express][express] and [Handlebars][handlebars].

## Installation

### Requirements

- [Node.js][node] v12+
- [npm][npm]

### Dependencies

## Todo

minimum viable product:
[*] test request for ocd-division/country:us/state:ia/sldl:29
[*] build out util dir
[*] process addresses into city and state OCD ids
[*] fetch election results for given OCD ids
[] new view for election results
[] new view for errors
[] tests for route
extra features
[] form verification, at least for city and state
[] get more elaborate OCD ids
[] nicer results page

To install the dependencies, run the following command:

```sh
npm install
```

## Usage

### Running

To run the application, use the following command:

```sh
DEBUG=js-upcoming-elections:* npm start
```

### Tests

To run the test suite, use the following command:

```sh
npm test
```

## Troubleshooting

If you need any help or notice something wrong with these instructions, let your
contact at Democracy Works know! Help getting started is not part of the
evaluation and you reaching out will not impact your score.

[express]: https://expressjs.com/
[handlebars]: https://handlebarsjs.com/
[node]: https://nodejs.org/
[npm]: https://docs.npmjs.com/
