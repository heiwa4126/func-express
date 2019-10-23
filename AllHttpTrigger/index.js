const createHandler = require('azure-function-express').createHandler
const express = require('express')

// Create express app as usual
const app = express()

app.get('/api/:foo/:bar', (req, res) => {
  res.json({
    foo: req.params.foo,
    bar: req.params.bar
  })
})

app.get('/api/hello', (req, res) => {
  req.context.log({ hello: 'world' }) // log example
  res.set('Content-Type', 'text/plain; charset=utf-8')
  res.send("Hello World! It's " + new Date().toISOString())
})

// Binds the express app to an Azure Function handler
module.exports = createHandler(app)