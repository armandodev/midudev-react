import { useState } from 'react'
import { searchMovies } from '../services/movies'

export const useMovies = (search) => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()

  const getMovies = async () => {
    try {
      setLoading(true)
      setError(null)
      const newMovies = await searchMovies(search)
      setMovies(newMovies)
    } catch (error) {
      setError(error.message)
    } finally {
      setTimeout(() => setLoading(false), 300)
    }
  }

  return { movies, getMovies, loading, error }
}
