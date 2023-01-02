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
    res.send(hours + ":" + minutes + ":" + seconds)
  })
  
  app.listen(port, () => {
    console.log(`Example app listening on ${port}`)
  })