const mangaForm = document.querySelector('form')
const search = document.querySelector('input')
const title = document.querySelector('#title')
const chapters = document.querySelector('#chapters')
const rating = document.querySelector('#rating')
const image = document.getElementById('image')

mangaForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const manga =  search.value 
  title.textContent = 'Loading...'
  console.log('Hello')
  chapters.textContent = ''
  rating.textContent = ''
  image.src = ''
  image.style.display='none'
  fetch('mangas?mangaSearch=' + manga).then((response) => {
    response.json().then((data) => {
      if (!data.title) {
        title.textContent = 'Please provide a correct name!'
      }
      title.textContent = data.title
      chapters.textContent = 'No. of chapters: ' + data.chapters
      rating.textContent = 'Score: ' + data.score
      image.src  = data.image_url
      image.style.display='block'
    })
  })
})