import withResults from './../mocks/with-results.json'

export const useMovies = () => {
  const movies = withResults.Search

  const mappedMovies = movies?.map((movie) => (
    {
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster
    }
  ))

  return mappedMovies
}
