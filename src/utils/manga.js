const request = require('request')

const Manga = (mangaSearch, callback) => {
  const url = "https://api.jikan.moe/v3/search/manga?q=" + encodeURIComponent(mangaSearch) 

  request({url: url, json: true}, (error, {body}) =>{
    if(error) {
      callback(error, undefined)
    } else if (body.request_cashed === false) {
      throw new Error('Please provide a correct name!')
    } 
    else if(!body.results[1]) {
      callback(undefined, {
        title: 'Enter a correct name',
        image_url: 'https://www.elegantthemes.com/blog/wp-content/uploads/2020/02/000-404.png',
        score: 'none',
        chapters: 'none'
      })
    }else {
      callback(undefined, {
        title: (body.results[0].title),
        chapters:(body.results[0].chapters),
        score: (body.results[0].score),
        image_url: (body.results[0].image_url)
      })
    }
  })
}


module.exports = Manga