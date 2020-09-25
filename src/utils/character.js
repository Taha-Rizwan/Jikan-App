const request = require('request')

const Character = (charSearch, callback) => {
  const url = "https://api.jikan.moe/v3/search/character?q=" + encodeURIComponent(charSearch) 

  request({url: url, json: true}, (error, {body}) =>{
    if(error) {
      callback(error, undefined)
    }else if (body.request_cashed === false) {
      throw new Error('Please provide a correct name!')
    } 
    else if(body.status) {
      callback(undefined, {
        name: 'Enter a correct name',
        image_url: 'https://www.elegantthemes.com/blog/wp-content/uploads/2020/02/000-404.png',
        anime: 'none',
        manga: 'none'
      })
    }

    else if(body.results[0].manga[0] === undefined){
    
      callback(undefined, {
        name: (body.results[0].name),
        image_url: (body.results[0].image_url),
        anime: (body.results[0].anime[0].name),
        manga: 'none'
      })
    }
    else if(body.results[0].anime[0] === undefined){
     callback(undefined, {
      name: (body.results[0].name),
      image_url: (body.results[0].image_url),
      anime: 'none',
      manga:  (body.results[0].manga[0].name)
     })
    }     
    else { 
      callback(undefined, {
        name: (body.results[0].name),
      image_url: (body.results[0].image_url),
      anime: (body.results[0].anime[0].name),
      manga:  (body.results[0].manga[0].name)
      })
    }
  })
}

Character('Itachi', (() => {
  console.log('hi')
}))

module.exports = Character