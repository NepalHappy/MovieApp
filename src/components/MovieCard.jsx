import { Link } from 'react-router-dom'
const imgURL = 'https://image.tmdb.org/t/p/w500/'
const MovieCard = ({
  id,
  original_title,
  poster_path,
  popularity,
  release_date,
  vote_average,
  vote_count,
  overview,
}) => {
  return (
    <div className="movie-card">
      <div className="img-container">
        <img src={`${imgURL}${poster_path}`} alt="" className="img" />
      </div>
      <div className="movie-infos">
        <h4>{original_title}</h4>
        <span
          style={{
            padding: '0.5rem',
            marginRight: '1rem',
            color: '#fff',
            background: getClassByRate(vote_average),
          }}
        >
          {vote_average}
        </span>
      </div>
      <div className="overview">
        <p>{overview.substring(0, 100)} ...</p>
        <Link
          className="btn"
          style={{ marginBottom: '1rem' }}
          to={`/movie/${id}`}
        >
          View More
        </Link>
      </div>
    </div>
  )
}

const getClassByRate = (vote) => {
  if (vote >= 8) {
    return 'green'
  } else if (vote >= 5) {
    return '#0369a1'
  } else {
    return 'red'
  }
}
export default MovieCard
