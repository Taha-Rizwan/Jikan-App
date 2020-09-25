const charForm = document.querySelector('form')
const search = document.querySelector('input')
const name = document.querySelector('#name')
const anime = document.querySelector('#anime')
const manga = document.querySelector('#manga')
const image = document.getElementById('image')

charForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const char =  search.value 
  name.textContent = 'Loading...'
  console.log('Hello')
  anime.textContent = ''
  manga.textContent = ''
  image.src = ''
  image.style.display='none'
  fetch('character?charSearch=' + char).then((response) => {
    response.json().then((data) => {
      if (!data.name) {
        name.textContent = 'Please provide a correct name!'
      }
      name.textContent = data.name
      anime.textContent = 'Anime appeared in: ' + data.anime
      manga.textContent = 'Manga appeared in: ' + data.manga
      image.src  = data.image_url
      image.style.display='block'
    })
  })
})