module.exports = app => {
    const movies = require("../controllers/movie.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Movies
    router.post("/add", movies.create);
  
    // Retrieve all Movies
    router.get("/read", movies.findAll);

    router.get('/read/by-title', movies.orderByTitle);
    
    router.get('/read/by-date', movies.orderByDate);

    router.get('/read/by-rating', movies.orderByRating);
  
    // Retrieve a single Movies with id
    router.get("/read/:id", movies.findOne);
  
    // Update a Movies with id
    router.put("/update/:id", movies.update);
  
    // Delete a Movies with id
    router.delete("/delete/:id", movies.delete);

    router.use((req, res, next) => {
      res.status(404).send("Sorry can't find that!")
    });
  
    app.use('/movies', router);
  };