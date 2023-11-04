import { useState } from 'react'
import withOutResults from './../mocks/without-results'
import { API_SEARCH_PREFIX } from './../constants'
// import withResults from './../mocks/with-results'

export const useMovies = (search) => {
  const [responseMovies, setResponseMovies] = useState([])

  const movies = responseMovies.Search

  const mappedMovies = movies?.map((movie) => (
    {
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster
    }
  ))

  const getMovies = () => {
    if (search) {
      fetch(`${API_SEARCH_PREFIX}${search}`)
        .then((response) => response.json())
        .then((json) => setResponseMovies(json))
    } else {
      setResponseMovies(withOutResults)
    }
  }

  return { movies: mappedMovies, getMovies }
}
