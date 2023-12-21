export const getMovies = async () => {
    const response = await  fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=1bbadb7db496f1fad1d1f1ebc4c41e30&language=en-US&include_adult=false&page=1`
    )
    return response.json()
  };