const animeForm = document.querySelector('form')
const search = document.querySelector('input')
const title = document.querySelector('#title')
const episosdes = document.querySelector('#episodes')
const rating = document.querySelector('#rating')
const image = document.getElementById('image')

animeForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const anime =  search.value 
  title.textContent = 'Loading...'
  console.log('Hello')
  episodes.textContent = ''
  rating.textContent = ''
  image.src = ''
  fetch('anime?animeSearch=' + anime).then((response) => {
    response.json().then((data) => {
      if (!data.title) {
        title.textContent = 'Please provide a correct name!'
      }
      title.textContent = data.title
      episodes.textContent = 'No. of episodes: ' + data.episodes
      rating.textContent = 'Score: ' + data.score
      image.src  = data.image_url
      image.style.display='block'
    })
  })
})