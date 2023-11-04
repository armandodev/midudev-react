import { API_SEARCH_PREFIX } from '../constants'

export const searchMovies = async (search) => {
  if (search === '') return null

  try {
    const response = await fetch(`${API_SEARCH_PREFIX}${search}`)
    const json = await response.json()

    const movies = json.Search

    return movies?.map((movie) => (
      {
        id: movie.imdbID,
        title: movie.Title,
        year: movie.Year,
        poster: movie.Poster
      }
    ))
  } catch (error) {
    throw new Error('Error al buscar las películas')
  }
}
