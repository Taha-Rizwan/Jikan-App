const request = require('request')

const Anime = (animeSearch, callback) => {
  const url = "https://api.jikan.moe/v3/search/anime?q=" + encodeURIComponent(animeSearch) 

  request({url: url, json: true}, (error, {body}) =>{
    if(error) {
      callback(error, undefined)
    }else if (!body.results[1]) {
      callback(undefined, {
        title: 'Enter a correct name',
        image_url: 'https://www.elegantthemes.com/blog/wp-content/uploads/2020/02/000-404.png',
        score: 'none',
        episodes: 'none'
      }) 
    }
    else {
      callback(undefined, {
        title: (body.results[0].title),
         episodes:(body.results[0].episodes),
        score: (body.results[0].score),
        image_url: (body.results[0].image_url)
      })
    }
  })
}


module.exports = Anime 