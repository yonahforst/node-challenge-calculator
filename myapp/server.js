const express = require('express')

const app = express()

const myLogger = (req, res, next) => {
  const visitTime = new Date();
  console.log(`visited ${req.url} at ${visitTime.toLocaleString()}`);
  next();
};

app.use(myLogger);

app.get('/', (req, res) => {
  res.send('hi there')
})

app.get('/watch', (req, res) => {
  const video = req.query.v;
  console.log("The user request the video ID " + video);
  res.send('The user request the video ID  ' + video);
}) 

app.get('/add', (req, res) => {
  const result = parseFloat(req.query.value1) + parseFloat(req.query.value2)
  res.send(result.toString())
})

app.get('/subtract', (req, res) => {
  const result = parseFloat(req.query.value1) - parseFloat(req.query.value2)
  res.send(result.toString())
})

app.get('/multiply', (req, res) => {
  const result = parseFloat(req.query.value1) * parseFloat(req.query.value2)
  res.send(result.toString())
})

app.get('/divide', (req, res) => {
  const result = parseFloat(req.query.value1) / parseFloat(req.query.value2)
  res.send(result.toString())
})



app.get('/:operation/:value1/:value2', (req, res) => {
  const operation = req.params.operation
  const value1 = parseFloat(req.params.value1)
  const value2 = parseFloat(req.params.value2)
  let result 

  if (operation == 'add') {
    result = value1 + value2
  }

  if (operation == 'subtract') {
    result = value1 - value2
  }

  if (operation == 'multiply') {
    result = value1 * value2
  }

  if (operation == 'divide') {
    result = value1 / value2
  }

  res.send(result.toString())
})

app.listen(3000, () => {
  console.log('server is running on port 3000')
})