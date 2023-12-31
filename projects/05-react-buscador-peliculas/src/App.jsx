import { useCallback, useState } from 'react'
import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'
import debounce from 'just-debounce-it'

function App () {
  const [sort, setSort] = useState(false)

  const { search, setSearch, error } = useSearch()
  const { movies, getMovies, loading, errorFetch } = useMovies(search, sort)

  const debouncedGetMovies = useCallback(debounce(
    search => {
      getMovies(search)
    }, 300),
  [])

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies(search)
  }

  const handleChange = (event) => {
    const newSearch = event.target.value
    setSearch(newSearch)
    debouncedGetMovies(newSearch)
  }

  const handleSort = () => {
    setSort(!sort)
  }

  return (
    <>
      <header>
        <h1>Buscador de películas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input
            id='search'
            onChange={handleChange}
            type='search'
            placeholder='Avengers, Batman, ...'
            value={search}
          />
          <input
            type='checkbox'
            onChange={handleSort}
            checked={sort}
          />
          <button>Buscar</button>
        </form>
      </header>

      <main>
        {error && <p style={{ color: '#f00' }}>{error}</p>}
        {errorFetch && <p style={{ color: '#f00' }}>{errorFetch}</p>}
        {loading ? <p>Cargando...</p> : <Movies movies={movies} />}
      </main>
    </>
  )
}

export default App
