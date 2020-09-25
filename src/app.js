//requiring stuff
const path = require('path')
const express = require('express')
const hbs = require('hbs')
const Anime = require('./utils/jikan')

const app = express()
const port = process.env.PORT || 3000

//Defining path. -_-
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//Setting up handelbars. ;)
app.set('view engine', 'hbs')
app.set('views' , viewsPath )
hbs.registerPartials(partialsPath)

//Setting static directory
app.use(express.static(publicDirectoryPath))

app.get('', (req,res) => {
  res.render('index', {
    title: "Jikan Anime",
    name: 'Taha Rizwan'
  })
})

app.get('/anime', (req,res) => {
  if(!req.query.animeSearch) {
    return res.send(
      {error: 'Please provide an anime!'}
    )
  }
  Anime(req.query.animeSearch, ((error, {title, episodes,score,image_url}) => {
    if (error) {
      return res.send(error)
    }
    res.send({
      title,
      episodes,
      score,
      image_url,
      animeSearch: req.query.animeSearch
    })
  }))
 
})

app.get('/about', (req,res) => {
  res.render('about', {
    title: 'About me',
    name: 'Taha Rizwan'
  })
})

app.get('/help', (req,res) => {
  res.render('help', {
    msg: 'Want some help?',
    title: 'Help',
    name: 'Taha Rizwan'
  })
})

app.get('*',(req,res) => {
  res.render('404', {
    title: 404,
    name: 'Taha Rizwan',
    error: 'Page not found'
  })
})

app.listen(port, () => {
  console.log('Server is up on port ' + port)
})