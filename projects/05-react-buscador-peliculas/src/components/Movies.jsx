const ListOFMovies = ({ movies }) => {
  return (
    <ul className='movies'>
      {
        movies.map(movie => (
          <li key={movie.id} className='movie'>
            <img
              className='poster'
              src={movie.poster === 'N/A' ? 'https://linnea.com.ar/wp-content/uploads/2018/09/404PosterNotFound.jpg' : movie.poster}
              alt={movie.title}
            />
            <h3>{movie.title}</h3>
            <p>{movie.year}</p>
          </li>
        ))
      }
    </ul>
  )
}

const NoResults = () => {
  return (<p>No se encontraron resultados</p>)
}

export const Movies = ({ movies }) => {
  const hasResults = movies?.length > 0
  return (
    hasResults
      ? (<ListOFMovies movies={movies} />)
      : (<NoResults />)
  )
}
