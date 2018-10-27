# JobsScrapper

## Install instructions

First you should run `npm install` after cloning the repository (you should have node install in your machine).

You should also install [download](https://www.postgresql.org/download/) and [install](https://www.postgresql.org/docs/9.3/static/tutorial-install.html) PostgreSQL (remember to set the user locally to `postgres` with `postgres` as password for development).

After installing PostgreSQL we you need to create a DB named `jobs_scrapper`, in this project you'll find migrations that will generate the tables.

### DB Commands

* `npm run migrate` to run migrations.
* `npm run unmigrate` to revert migrations.
* `npm run generate-migration` to generate a migration file.
* `npm run sequelize` to run sequelize commands based on your needs.

## Running the server

* `npm run build` after making changes, we are transpiling JS code in other to use ES6 in NodeJS.
* `npm run dev` to run the dev server.
* `npm start` to run the prod server without the dev-watcher.

## To Take into Consideration

We are using [sequelize](http://docs.sequelizejs.com/manual/installation/getting-started) in order to manage DB operations.
