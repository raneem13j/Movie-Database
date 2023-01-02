//create a server

const express = require('express')
const app = express()
const port = 3000
// the data array
const movies = [
    { title: 'Jaws', year: 1975, rating: 8 },
    { title: 'Avatar', year: 2009, rating: 7.8 },
    { title: 'Brazil', year: 1985, rating: 8 },
    { title: 'الإرهاب والكباب', year: 1992, rating: 6.2 }
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
app.get('/movies/read/by-date', (req, res) => {
    // Sort movies by date
    const sortedMovies = movies.sort((a, b) => a.year - b.year);
    res.send({ status: 200, data: sortedMovies });
  });
  
app.get('/movies/read/by-rating', (req, res) => {
    // Sort movies by rating
    const sortedMovies = movies.sort((a, b) => b.rating - a.rating);
    res.send({ status: 200, data: sortedMovies });
  });
  
app.get('/movies/read/by-title', (req, res) => {
    // Sort movies by title
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


app.listen(port, () => {
    console.log(`Example app listening on ${port}`)
  });