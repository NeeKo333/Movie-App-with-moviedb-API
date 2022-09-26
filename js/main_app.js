const api_key = "6713c5be-4fb6-449d-aefd-f554b9c7d230";
const apiDB = "efa7066b01bee8c24bbf47a4d9b5dc9b";
const catalog = document.querySelector(".film_catalog");
async function getFilms() {
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiDB}&language=en-US&page=1`;
  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const result = await response.json();
  postFilmIntoCatalog(result.results);
}

function postFilmIntoCatalog(arr) {
  arr.forEach((element, index) => {
    const el = document.createElement("div");
    el.classList.add("film_card");
    el.dataset.id = index;
    el.innerHTML = `<div class="film_preview">
  <img src=http://image.tmdb.org/t/p/w500/${element.poster_path} alt="" />
  <span class="film_rating">${element.vote_average}</span>
</div>
<a href="/films/?film-id=${element.id}" target="_blank" class="film_title">${element.original_title}</a>
<div class="film_description">${element.release_date}</div>
<div class="film_genres"></div>
<div class="film_rating"></div>`;
    catalog.appendChild(el);
  });
}

getFilms();

/*---------------------------------------------------------------------------*/
