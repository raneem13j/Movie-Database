# We're going to build the Codi Movie Database

or CMDB for short

We'll use Express and Node to create a database and a way to control it.

However, and this is important to understand, we will *not* create a front end interface for it.

## Instructions

- Do a `git pull` inside the Submission repo
- Go to Submissions/Challenge/movie-database
- COMMIT AFTER EACH STEP, call each commit by the name of the step

## Goals:

- Learn express
- Understand how APIs work
- Understand how a REST interface works
- **Competencies**: 
  - <kbd>Express.js</kbd>
  - <kbd>APIs</kbd>
  - <kbd>REST</kbd>
  - <kbd>JSON</kbd>

## Step 1 - Setting up the project

- go in the movie-database directory and run `npm init` to create a new project
- answer whatever you like to the questions
- install express: `npm install --save express`
- also, install nodemon, it will make things easier: `npm install --save-dev nodemon`
- open the project in your IDE or editor
- edit `package.json` and add the following:
    ```json
        // previous package.json stuff here...
        "scripts": {
            "test": "echo \"Error: no test specified\" && exit 1", // this should be there
            "dev": "nodemon index.js"
        },
        // next package.json stuff here...
    ```
- create a file "index.js"
- create a file ".gitignore". In this file, write, at the top: `node_modules`. This will prevent the `node_modules` directory to be added to your git repo
- push
- you're set!

## Step 2 - Create a simple express server

- with express, create a server, and make it listen on a port of your choice (e.g, `3000`)
- make it so this express server, when receiving an url, answers `ok`
- test your server by running `npm run dev`
- commit ("step 2")

## Step 3 - Create an express simple API

- with Express, create a route such as, when the url `/test` is invoked, answers: `{status:200, message:"ok"}`
- with Express, create a route such as, when the url `/time` is invoked, answers with: `{status:200, message:<TIME>}`, where `<TIME>` is the current time in hours and seconds like so: `14:20`
- commit ("step 3") 

## Step 4 - Let's complicate the API

- with Express, create a route such as, when the url `/hello/<ID>` is invoked, answers with: `{status:200, message:"Hello, <ID>"}`, where `<ID>` may be anything the user wanted to pass. The user may also not pass anything.
- with Express, create a route such as, when the url `/search?s=<SEARCH>` is invoked, answers with `{status:200, message:"ok", data:<SEARCH>}` if `<SEARCH>` is provided, and `{status:500, error:true, message:"you have to provide a search"}` if it is not. Be sure to set the *http status* to `500` too.
- commit ("step 4") 

## Step 5 - Set up the basis for CRUD

- With Express, create four routes: `/movies/create`, `/movies/read`, `/movies/update`, and `/movies/delete`, where these routes can answer anything (we will change it later)
- OPTIONAL: call your routes `movies/add`, `movies/get`, `/movies/edit`, and `/movies/delete`, if you prefer. It doesn't matter
- In your javascript file, create the array of movies:
   ```js
   const movies = [
       { title: 'Jaws', year: 1975, rating: 8 },
       { title: 'Avatar', year: 2009, rating: 7.8 },
       { title: 'Brazil', year: 1985, rating: 8 },
       { title: 'الإرهاب والكباب‎', year: 1992, rating: 6.2 }
   ]
   ```
- With Express, make it so that when the url `/movies/read` is requested, you answer with `{status:200, data:<MOVIES> }` where `<MOVIES>` is the list of movies
- commit ("step 5") 

## Step 6 - SEARCH

- With express, make it so when the url `/movies/read/by-date` is requested, you answer with `{status:200, data:<MOVIES>}`, where `<MOVIES>` is the list of movies *ORDERED BY DATE*
- With express, make it so when the url `/movies/read/by-rating` is requested, you answer with `{status:200, data:<MOVIES>}`, where `<MOVIES>` is the list of movies *ORDERED BY RATING*, where the highest rating is *at the top*.
- With express, make it so when the url `/movies/read/by-title` is requested, you answer with `{status:200, data:<MOVIES>}`, where `<MOVIES>` is the list of movies *ORDERED BY TITLE*
- commit ("step 6") 

## Step 7 - READ ONE

- With Express, make it so that when the url `/movies/read/id/<ID>` is requested, you answer with `{status:200, data:<MOVIE>}`, where `<MOVIE>` is the movie defined by the provided `<ID>`. If the id doesn't exist, then the answer should be: `{status:404, error:true, message:'the movie <ID> does not exist'}`. Don't forget to set an actual `404` status code. 
- commit ("step 7") 

## Step 8 - CREATE

- With Express, make it so that when the url `/movies/add?title=<TITLE>&year=<YEAR>&rating=<RATING>`, it:
    1. creates a *new* movie in the form: `{title: <TITLE>, year: <YEAR>, rating: <RATING>}`
    2. it adds this new movie to the `movies` array
    3. answer with the new list of movies just like for `/movies/read`
- Make it so if:
    1. `<TITLE>` is missing, *or* 
    2. `<YEAR>` is missing *or*
    3. `<YEAR>` is not made of 4 digits *or*
    4. `<YEAR>` is not a number
    6. ...then you answer `{status:403, error:true, message:'you cannot create a movie without providing a title and a year'}`
- But if `<RATING>` is missing, set a default rating of `4`
- commit ("step 8")

## Step 9 - DELETE

- With Express, make it so that when the url `movies/delete/<ID>` is requested, you delete the corresponding movie, and answer with the new list of movies, just like for `/movies/read`. if the id does not exist, answer with `{status:404, error:true, message:'the movie <ID> does not exist'}`
- commit ("step 9") 

## Step 10 - UPDATE

- With Express, make it so that when the url `/movies/update/<ID>?title=<NEW_TITLE>`, the movie designed by `<ID>` gets it's title changed to `<NEW_TITLE>`. Return the modified array of movies.
- With Express, make it so that when the url `/movies/update/<ID>?title=<NEW_TITLE>&rating=<NEW_RATING>`, the movie designed by `<ID>` gets its rating changed to `<NEW_RATING>`, and its title to `<NEW_TITLE>`. If a user provides any of `title`, `rating`, or `year`, the movie should change to reflect those modifications. Fields that the user did *not* provide should not change. In the example here, the `year` of the movie should *not* change, as the user only provided `title` and `rating`.
- commit ("step 10") 

## Step 11 - Use HTTP Verbs

- change the urls to use `HTTP VERBS` (look it up. Google "rest APIs", and see "how to build REST APIs with Express")
- commit ("step 11") 

## Step 12: Data Persistence

- Save the data in a mongoDB database. See [this tutorial](https://medium.freecodecamp.org/building-a-simple-node-js-api-in-under-30-minutes-a07ea9e390d2) for help 
- commit ("step 12") 

## Step 13: Authentication

- create a CRUD app but for users (same as the one for movies, but with a `users` array that takes objects with usernames and passwords)
- only allow an authenticated used to modify or delete movies
- commit ("step 13") 
