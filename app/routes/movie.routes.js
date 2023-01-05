module.exports = app => {
    const movies = require("../controllers/movie.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Movies
    router.post("/add", movies.create);
  
    // Retrieve all Movies
    router.get("/read", movies.findAll);
  
    // Retrieve a single Movies with id
    router.get("/read/:id", movies.findOne);
  
    // Update a Movies with id
    router.put("/add/:id", movies.update);
  
    // Delete a Movies with id
    router.delete("/delete/:id", movies.delete);
  
    app.use('/api/movies', router);
  };