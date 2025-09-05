/* api  https://www.omdbapi.com/?i=tt3896198&apikey=8804eea5&s= */

async function searchAPI() {
  /*const movies = await fetch (`https://www.omdbapi.com/?i=tt3896198&apikey=8804eea5&s=${query}`);*/
  const movies = await fetch(
    `https://www.omdbapi.com/?i=tt3896198&apikey=8804eea5&i=big_hero_6`
  );
  const moviesData = await movies.json();
  const limitedMovies = moviesData.Search.Slice(0, 3);
  const movieListEle = document.querySelector("#searchResults")

  movieListEle.innerHTML = limitedMovies.map(
    (movie) => `<div class="film__wrapper">
            <img
              class="film__img"
              src="${limitedMovies.Search.Poster}"
              alt=""
            />
            <h3 class="film__name">${limitedMovies.Search.Title}</h3>
            <p class="media__type">${limitedMovies.Search.Type}</p>
            <p class="release__date">Release Date:${limitedMovies.Search.Released}</p>
            <p class="genre">Genre(s):${limitedMovies.Search.Genre}</p>
            <p class="imdb__rating">Rating:${limitedMovies.Search.imdbRating}</p>
          </div>`).join("")
  console.log(limitedMovies);
}