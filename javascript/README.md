# Democracy Works Practical: Upcoming Elections

Hello, here's my submission.

I've tried to keep my code simple and legible. I believe the basic requirements are met. If I had more time I would first build out more specific tests, and generate more types of OCD IDs from the address input. I left my working todo list at the bottom of this file, to demonstrate my workflow.

Thank you for your consideration!

---

This is a server-side web application written in JavaScript with
[Express][express] and [Handlebars][handlebars].

## Installation

### Requirements

- [Node.js][node] v12+
- [npm][npm]

### Dependencies

I added two dependencies: axios, to make the API request, and nodemon, to streamline the development workflow.

To install the dependencies, run the following command:

```sh
npm install
```

## Usage

### Running

To run the application, use the following command:

```sh
DEBUG=js-upcoming-elections:* npm start-dev
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

## TODOs

minimum viable product:
[*] test request for ocd-division/country:us/state:ia/sldl:29
[*] build out util dir
[*] process addresses into city and state OCD ids
[*] fetch election results for given OCD ids
[] tests for route
[*] new view for election results
[*] view for errors
[*] form validation, at least for city and state
extra features
[] get more elaborate OCD ids
[] nicer results page
[] more tests
