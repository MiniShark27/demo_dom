const express = require('express')
const app = express()
const port = 3000

const users = {
  'benmelz': 'benspassword',
  'jakobfalus': 'jakobspassword'
}

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
