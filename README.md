![](https://travis-ci.com/DonatoM/CUNYTechPipeline.svg?token=PVCqhzNMfi8LeQhYz7N2&branch=master)

# Blog

Blog created using Node, Express, and PostgreSQL

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisities

Node.js Version 6+ (8+ recommended)

Postgresql Version 9.3+

### Running the Blog

1) Clone this repository to your host computer.
```
git clone https://github.com/CUNYTechPrep/ctp-microblog.git
```

2) Change into the `/blog` app directory
```
cd blog
```

3) Create a database for the blog (_replace `DB_USER` with your postgres user_)
```
createdb -h localhost -U DB_USER cptblog_development
```

4) Edit the `/blog/config/config.json` file with corresponding credentials

5) Run npm install
```
npm install
```

6) Start the application
```
npm start
```

7) See the application by entering this in your web browser address bar
```
localhost:3000
```


## Running the tests

Coming Soon

### Coding Style (_Linting_)

We use AirBnB JS coding style. You can check whether or not your code
is styled properly by checking it using eslint. You must be within your project directory (inside of blog)

```
./node_modules/.bin/eslint nameOfYourFile.js
```

or for the entire project:

```
./node_modules/.bin/eslint .
```

## Built With

* Node
* Express
* Postgres

## License

This project is licensed under the MIT License.
