import MovieCard from './MovieCard'
const MovieList = ({ movies }) => {
  return (
    <div className="movie-container">
      {movies.map((movie) => {
        return <MovieCard key={movie.id} {...movie} />
      })}
    </div>
  )
}
export default MovieList
