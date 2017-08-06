const express = require('express')
const app = express()

// Use PORT environment variable or default to 8080
const port = process.env.PORT || 8080

// Endpoint at root with optional `name` param
app.get('/:name?', (req, res) => {
  res.status(200).send(`<h1>Hello${req.params.name ? ' ' + req.params.name : ''}!!!</h1>`)
})

// Start listener
app.listen(port, () => {
  console.log(`Service running on ${port}`)
})