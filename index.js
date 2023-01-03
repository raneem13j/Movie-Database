//create a server

const express = require('express')
const app = express()
const port = 3000
// the data array
const movies = [
    {id:1, title: 'Jaws', year: 1975, rating: 8 },
    {id:2, title: 'Avatar', year: 2009, rating: 7.8 },
    {id:3, title: 'Brazil', year: 1985, rating: 8 },
    {id:4, title: 'الإرهاب والكباب', year: 1992, rating: 6.2 }
]
// test command
app.get('/test', (req, res) => {
  res.send("OK")
});
// time command
let date_ob = new Date();
// current hours
let hours = date_ob.getHours();

// current minutes
let minutes = date_ob.getMinutes();

// current seconds
let seconds = date_ob.getSeconds();

app.get('/time', (req, res) => {
    res.send({status: 200, message: hours + ":" + minutes + ":" + seconds})
  });
// hello id command
app.get('/hello/:id', (req, res) => {
    const id = req.params.id;
    res.send({ status: 200, message: `Hello,${id}` });
  });  
app.get('/hello', (req, res) => {
    const id = req.params.id;
    res.send({ status: 200, message: `Hello` });
  });  
// search  command
app.get('/search', (req, res) => {
  const search = req.query.s;
  if (search) {
    res.status(200).json({
      status: 200,
      message: "ok",
      data: search
    });
  } else {
    res.status(500).json({
      status: 500,
      error: true,
      message: "you have to provide a search"
    });
  }
});
//movie / read command
app.get('/movies/:read', (req, res) => {
    res.status(200).send({ status: 200, data: movies });
  });
// Sort movies by date
app.get('/movies/read/by-date', (req, res) => {
    const sortedMovies = movies.sort((a, b) => a.year - b.year);
    res.send({ status: 200, data: sortedMovies });
  });
// Sort movies by rating 
app.get('/movies/read/by-rating', (req, res) => {
    const sortedMovies = movies.sort((a, b) => b.rating - a.rating);
    res.send({ status: 200, data: sortedMovies });
  });
// Sort movies by title  
app.get('/movies/read/by-title', (req, res) => {
    const sortedMovies = movies.sort((a, b) => a.title.localeCompare(b.title));
    res.send({ status: 200, data: sortedMovies });
  });
// movie / create command
app.post('/movies/:create', (req, res) => {
    // Code to handle creating a new movie goes here
});
// movie / update command
app.put('/movies/:update', (req, res) => {
   // Code to handle updating an existing movie goes here
  });
// movie / delete command
app.delete('/movies/:delete', (req, res) => {
   // Code to handle deleting a movie goes here
});
// Define the route for /movies/read/id/:id
app.get('/movies/read/id/:id', (req, res) => {
    // Get the movie id from the request parameters
    const id = req.params.id;
  
    // Find the movie with the given id
    const movie = movies.find(movie => movie.id === Number(id));
  
    // If the movie was found, send a 200 status code and the movie data
    if (movie) {
      res.status(200).json({ status: 200, data: movie });
    } else {
      // If the movie was not found, send a 404 status code and an error message
      res.status(404).json({ status: 404, error: true, message: `the movie ${id} does not exist` });
    }
  });
app.listen(port, () => {
    console.log(`Example app listening on ${port}`)
  });