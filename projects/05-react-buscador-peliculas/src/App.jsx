import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'

function App () {
  const { search, setSearch, error } = useSearch()
  const { movies, getMovies, loading, errorFetch } = useMovies(search)

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies()
  }

  const handleChange = (event) => {
    setSearch(event.target.value)
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