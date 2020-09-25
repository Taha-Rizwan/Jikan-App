const request = require('request')

const Anime = (animeSearch, callback) => {
  const url = "https://api.jikan.moe/v3/search/anime?q=" + encodeURIComponent(animeSearch) 

  request({url: url, json: true}, (error, {body}) =>{
    if(error) {
      callback(error, undefined)
    }else if (body.request_cashed === false) {
      throw new Error('Please provide a correct name!')
    } else {
      callback(undefined, {
        title: (body.results[0].title),
         episodes:(body.results[0].episodes),
        score: (body.results[0].score),
        image_url: (body.results[0].image_url)
      })

  //     const info = {
  //      title: (body.results[0].title),
  //   episodes:(body.results[0].episodes),
  //   image: (body.results[0].image_url)
  // }
    }
  })
}


module.exports = Anime 