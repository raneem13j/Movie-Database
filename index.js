//create a server

const express = require('express')
const app = express()
const port = 3000
// test command
app.get('/test', (req, res) => {
  res.send("OK")
})
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
  })
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




  app.listen(port, () => {
    console.log(`Example app listening on ${port}`)
  })