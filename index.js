const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 4000



app.get('/shows', (req, res) => res.send('Hello World!'))
app.post('/shows', (req, res) => res.send('Hello World!'))
app.putt('/shows', (req, res) => res.send('Hello World!'))
app.delete('/shows', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))