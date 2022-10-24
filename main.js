
const peliculasDiv = document.querySelector(".peliculas");
const formBuscar = document.getElementById("form");

const mostrarPelicula = (pelicula) => {
  peliculasDiv.innerHTML = "";
  pelicula.forEach((pelicula) => {
    peliculasDiv.innerHTML += `
                  <div class="card col-lg-3 col-xs-12 col-md-6 m-1">
                      <div class="personaje">
                      <div class="card-body">
                      <h3 class="card-header">${pelicula.title}</h3>
                      <h5 class="card-title">${pelicula.overview}</h5>
                      <img style="height: 200px; width: 100%; display: block;" src="https://image.tmdb.org/t/p/w300_and_h450_bestv2/${pelicula.poster_path}"  alt="Card image">
                      </div>
                      </div>
                      </div>
                       `;
  });
};

const buscarPelicula = async (e) => {
  e.preventDefault();
  try {
    const busqueda = e.target.buscar.value;
    const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=942ad2a0cd0e42b4e326e96febbc6d53&language=en-US&query=${busqueda}&page=1&include_adult=false`);
    const pelicula = res.data.results;
    mostrarPelicula(pelicula);
  } catch (error) {
    console.error(error);
  }
};

formBuscar.addEventListener("submit", buscarPelicula);
