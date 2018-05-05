

# Blog

Blog created using Node, Express, and PostgreSQL

This blog will be used as boilerplate for the capcoin spv-client

## Prerequisities

Node.js Version 6+ (8+ recommended)

Postgresql Version 9.3+

### Running the Blog

1) Clone this repository to your host computer.
```
git clone https://github.com/David-Bohl/capcoin-spv.git
```

2) Change into the `/capcoin-spv` app directory
```

3) Create a database for the blog (_replace `DB_USER` with your postgres user_)
```

createdb -h localhost -U DB_USER capcoin_spv
```

4) Edit the `/config/config.json` file with corresponding credentials

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
