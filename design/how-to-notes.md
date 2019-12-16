# Project setup from start to finish

1. Build out your root file structure with `gitignore, .env (optional), index.js, api folder > server.js` to start.

2. Run `npm init` and install `package.json` using the prompts. -- don't forget to change the `scripts` line from test into something more useful.

3. Run `npm i`, and then run npm i to get your dependencies. Some good ones are: `sqlite3, express, knex, knex-cleaner, nodemon, cors, dotenv, helmet`.

4. Run `knex init` to create your knexfile. Update it to reflect a proper migrations and seeds path, as well as a preferred name for your table.

5. Continue to build out your root folder, and (if you haven't) consider, and map the design of your tables for your migrations. dbDesigner is a decent system.

## Adding Content

1. If you haven't, modify your gitignore file to show all the things you want ignored. Use a previous project's data, if you need.

2. Set your dotenv file's port, and then head to index.js to import and set your listening server business.

3. Import dependencies into your server file and map out your routes. Add all the content to make a working server and don't forget the module.exports in the end to export it to the index file correctly.

4. Time to work on your migrations! Run `knex migrate:make [name of your migration file]` to build your data folder with your migrations. You can do `knex seed:make 00-[seed name]` to make seeds.
    4a. Build your tables in migrations, and from them you can also build seeds.

5. Add a dbConfig file in your data folder and add content to export all your knex-es. Then you can run your migrations with `knex migrate:latest` and `knex seed:run`. Note--Any time you run a migrate:latest, you need to rerun your seeds. You can also run it to reset your Insomnia file, if you like.

6. Build your helper files, and then your route files with CRUD operations. Use Insomnia to test endpoints.





