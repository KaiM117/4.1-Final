

/* api  https://www.omdbapi.com/?i=tt3896198&apikey=8804eea5&s= */

/*document.getElementById('searchButton').addEventListener('click', function() {
    const query = document.getElementById('searchInput').value;
    searchAPI(query);
});*/

async function searchAPI() {
  /*const movies = await fetch (`https://www.omdbapi.com/?i=tt3896198&apikey=8804eea5&s=${query}`);*/
  const movies = await fetch (`https://www.omdbapi.com/?i=tt3896198&apikey=8804eea5&s=big_hero_6`);
  const moviesData = await movies.json()
  const limitedMovies = moviesData.slice(0,2)
} 

/*console.log(searchAPI())
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
}*/