const apiDB = "efa7066b01bee8c24bbf47a4d9b5dc9b";

const path = location.search;
let id = path.replace(/film-id=/gi, "").slice(1);
id = Number(id);
const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiDB}&language=en-US`;
const conteiner = document.querySelector(".conteiner");

async function getSingleFilm(url) {
  const response = await fetch(url);
  const data = await response.json();

  const tamplate = `
    <img src="http://image.tmdb.org/t/p/w500/${data.poster_path}" alt="" />
    <p>${data.overview}</p>
`;

  conteiner.innerHTML = tamplate;
  const title = document.querySelector("title");
  title.innerText = data.original_title;
}

getSingleFilm(url);
