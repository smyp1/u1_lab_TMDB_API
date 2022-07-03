const API_KEY = "f2de020fe054f86d032dd56035fc12b3";
const DOMAIN = "https://api.themoviedb.org/3";
const IMAGE_BASE_PATH = "https://image.tmdb.org/t/p/original";
const searchInput = document.querySelector("input");
const button = document.querySelector("button");
const poster = document.querySelector(".movie-list");

function renderList(arr) {
  console.log(arr);
  for (i = 0; i < arr.length; i++) {
    let li = document.createElement("li");
    li.innerHTML = arr[i].original_title;
    poster.appendChild(li);
    let image = document.createElement("img");
    image.src = `${IMAGE_BASE_PATH}/${arr[i].poster_path}`;
    poster.appendChild(image);
  }
}

button.addEventListener("click", async () => {
  clear();
  let search = searchInput.value;
  let response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${search}&api_key=${API_KEY}`
  );
  let films = response.data.results;
  console.log(response);
  renderList(films);
});
