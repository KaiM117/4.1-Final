/// i need to add a loading state to the btn 
/// i want to make the cinema img dissapear and replace it with a filter toggle and then the display of the 6 movies from the backend

/* api  https://www.omdbapi.com/?i=tt3896198&apikey=8804eea5&s= */

document.getElementById('searchButton').addEventListener('click', function() {
    const query = document.getElementById('searchInput').value;
    searchAPI(query);
});

async function searchAPI(query) {
    const movies = await fetch (`https://www.omdbapi.com/?i=tt3896198&apikey=8804eea5&s=${query}`);
    const moviesData = await movies.slice(0, 6).json()
}
console.log(searchAPI())
function movieHTML(movie, series){
    return `<div class="film__wrapper">
            <img
              class="film__img"
              src="${movie.Poster}"
              alt=""
            />
            <h3 class="film__name">${movie.Title}</h3>
            <p class="release__date">Release Date:${movie.Released}</p>
            <p class="genre">Genre(s):${movie.genre}</p>
            <p class="imdb__rating">Rating:${movie.imdbRating}</p>
          </div>`
}