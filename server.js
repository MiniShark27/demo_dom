const express = require('express')
const app = express()
const port = 3000

//Valid Login Credentials are stored here
//in a real app this would likely be in a database
const users = {
  'benmelz': 'benspassword',
  'jakobfalus': 'jakobspassword',
  'test': '1234'
}

//For the post request to read the body as JSON
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//Grabs the html from the public folder
app.use(express.static('public'))

//The post request (called in the public/login.js file)
app.post('/login', (req, res) => {
  console.log(req.body);
  const { username, password } = req.body
  if (users[username] === password) {
    console.log(`Logged in as ${username}`)
    res.status(200).send(`Hello ${username}`)
  } else {
    console.log('Login failure')
    res.status(401).send('Failed')
  }
})

//Runs the server on the port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
