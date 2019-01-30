const express = require('express')
const bodyParser = require('body-parser')
const db = require('monk')('mongodb://admin:password1@ds054289.mlab.com:54289/tv-demo-db')
const tvShowCollection = db.get('tvShow')
const app = express()
const port = 4000
const tvShows = []

app.use(bodyParser.json())

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS')
    res.header('Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization')
    next()
   })

app.get('/shows/', async (req, res) => {
    const tvShow = await tvShowCollection.find(req.params.id)
    res.send(tvShow)
})

app.get('/shows/', async (req, res) => {
    const tvShows = await tvShowCollection.find({})
    res.send(tvShows)
})

app.post('/shows', async (req, res) => {
    const tvShow = await tvShowCollection.insert(req.body)
    
    console.log(tvShow)

    res.send(tvShow)
})

app.put('/shows', (req, res) => res.send('Hello World!'))

app.delete('/shows', (req, res) => res.send('Hello World!'))


app.listen(port, () => console.log(`Example app listening on port ${port}!`))