import { useRef, useState, useMemo, useCallback } from 'react'
import { searchMovies } from '../services/movies'

export const useMovies = (search, sort) => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()
  const previousSearch = useRef(search)

  const getMovies = useCallback(async (search) => {
    if (search === previousSearch.current) return
    try {
      setLoading(true)
      setError(null)
      previousSearch.current = search
      const newMovies = await searchMovies(search)
      setMovies(newMovies)
    } catch (error) {
      setError(error.message)
    } finally {
      setTimeout(() => setLoading(false), 300)
    }
  }, [])

  const sortedMovies = useMemo(() => (
    sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies
  ), [movies, sort])

  return { movies: sortedMovies, getMovies, loading, error }
}
