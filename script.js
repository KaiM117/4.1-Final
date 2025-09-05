/* api  https://www.omdbapi.com/?i=tt3896198&apikey=8804eea5&s= */

async function searchAPI() {
  /*const movies = await fetch (`https://www.omdbapi.com/?i=tt3896198&apikey=8804eea5&s=${query}`);*/
  const movies = await fetch(
    `https://www.omdbapi.com/?i=tt3896198&apikey=8804eea5&s=big_hero_6`
  );
  const moviesData = await movies.json();
  const limitedMovies = moviesData.Search.slice(0, 3);
  const movieListEle = document.querySelector("#searchResults")

  movieListEle.innerHTML = limitedMovies.map(
    (movie) => `<div class="film__wrapper">
            <img
              class="film__img"
              src=""
              alt=""
            />
            <h3 class="film__name">${movie.Title}</h3>
            <p class="media__type"></p>
            <p class="release__date">Release Date:${movie.Released}</p>
            <p class="genre">Genre(s):${movie.genre}</p>
            <p class="imdb__rating">Rating:${movie.imdbRating}</p>
          </div>`).join("")
  console.log(limitedMovies);
}