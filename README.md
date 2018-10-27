# JobsScrapper

## Install instructions

First you should run `npm install` after cloning the repository (you should have node install in your machine).

You should also install [download](https://www.postgresql.org/download/) and [install](https://www.postgresql.org/docs/9.3/static/tutorial-install.html) PostgreSQL (remember to set the user locally to `postgres` with `postgres` as password for development).

After installing PostgreSQL we you need to create a DB named `jobs_scrapper`, in this project you'll find migrations that will generate the tables.

### DB Commands

First of all, you should install `sequelize-cli` globally in your environment. by running `npm install -g sequelize-cli`.

* `npm run migrate` to run migrations.
* `npm run unmigrate` to revert migrations.
* `npm run generate-migration` to generate a migration file.
* `npm run sequelize` to run sequelize commands based on your needs.

## Running the server

* `npm run build` to transpile JS code in order to use ES6 in NodeJS(no needed for dev).
* `npm run build:watch` to auto-generate the transpiled files on changes.
* `npm start` to run the server.

## To Take into Consideration

We are using [sequelize](http://docs.sequelizejs.com/manual/installation/getting-started) in order to manage DB operations.
