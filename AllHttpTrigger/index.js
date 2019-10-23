'use strict'
const createHandler = require('azure-function-express').createHandler
const myapp = require('./myapp')
module.exports = createHandler(myapp.app)