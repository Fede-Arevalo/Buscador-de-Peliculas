const peliculasDiv = document.querySelector(".peliculas");
const formBuscar = document.getElementById("form");

const buscarPelicula = async (e) => {
  e.preventDefault();
  try {
    const busqueda = e.target.buscar.value;
    const res = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=942ad2a0cd0e42b4e326e96febbc6d53&language=en-US&query=${busqueda}&page=1&include_adult=false`
    );
    const pelicula = res.data.results;
    mostrarPelicula(pelicula);
  } catch (error) {
    console.error(error);
  }
};

formBuscar.addEventListener("submit", buscarPelicula);

const mostrarPelicula = (pelicula) => {
  peliculasDiv.innerHTML = "";
  pelicula.forEach((pelicula) => {
    peliculasDiv.innerHTML += `
                  <div class="card m-1" style="width: 18rem;">
                    <img src="https://image.tmdb.org/t/p/w300_and_h450_bestv2/${pelicula.poster_path}" class="card-img-top" alt="Card image">
                      <div class="card-body">
                        <h4 class="card-title">${pelicula.title}</h4>
                          <p class="card-text">${pelicula.overview}</p>
                      </div>
                  </div> 
    `;
  });
};
