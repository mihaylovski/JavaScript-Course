const addMovieBtn = document.getElementById('add_movie_btn');
const searchBtn = document.getElementById('search_btn');

const movies = [];

const renderMovies = ( filter = '') => {
    const movieList = document.getElementById('movie_list');

    if( movies.length === 0) {
      movieList.classList.remove('visible');
      return;
    } else {
      movieList.classList.add('visible');
    }

    movieList.innerHTML = '';
    const filteredMovies = !filter ? movies : movies.filter( movie => movie.info.title.includes(filter));
    
    filteredMovies.forEach((movie) => {
      const movieEL = document.createElement('li');
      const { info, ...otherProps } = movie;
      console.log(otherProps);
      let   { getFormattedTitle } = movie;
      //const { title: movieTitle } = info;
      //getFormattedTitle = getFormattedTitle.bind(movie);
      let text = movie.getFormattedTitle.call(movie) + ' - ';
      for (const key in info) {
        if (key !== 'title' && key !=='_title') {
          text = text + `${key}: ${info[key]}`;
        }
      }
      movieEL.textContent = text;
      movieList.append(movieEL);
    });
}

const addMovieHandler = () => {
  const title = document.getElementById('title').value;
  const extraName = document.getElementById('extra_name').value;
  const ExtraValue = document.getElementById('extra_value').value;

  if (title.trim() === '' || extraName.trim() === '' || ExtraValue.trim() === '') {
    return;
  }

  const newMovie = {
    info: {
      set title(val) {
        if(val.trim() === '') {
          this._title = 'DEFAULT';
          return;
        }
        this._title = val;
      },
      get title() {
        return this._title;
      },
      [extraName]: ExtraValue
    },
    id: Math.random().toString(),
    getFormattedTitle() {
      return this.info.title.toUpperCase();
    }
  };

  newMovie.info.title = title;
  console.log(newMovie.info.title);

  movies.push(newMovie);
  console.log(newMovie);
  renderMovies();
};

searchMovieHandler = () => {
  console.log (this);
  const filterTerm = document.getElementById('filter_title').value;
  renderMovies(filterTerm);
}


addMovieBtn.addEventListener('click', addMovieHandler);
searchBtn.addEventListener('click', searchMovieHandler);