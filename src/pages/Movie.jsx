import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { Link, Navigate, useLoaderData } from 'react-router-dom'
const searchById = 'https://api.themoviedb.org/3/movie'
const imgURL = 'https://image.tmdb.org/t/p/w500/'

const singleMovie = (id) => {
  return {
    queryKey: ['movie', id],
    queryFn: async () => {
      const fullUrl = `${searchById}/${id}?api_key=${
        import.meta.env.VITE_API_KEY
      }`
      const { data } = await axios.get(fullUrl)
      return data
    },
  }
}

export const loader =
  (queryClient) =>
  async ({ params }) => {
    const { id } = params
    queryClient.ensureQueryData(singleMovie(id))
    return id
  }

const Movie = () => {
  const id = useLoaderData()
  const { data, isLoading, isError } = useQuery(singleMovie(id))
  if (!data) {
    return <Navigate to="/" />
  }
  const {
    poster_path,
    genres,
    original_title,
    overview,
    popularity,
    production_countries,
    release_date,
    revenue,
    runtime,
    vote_average,
    vote_count,
    production_companies,
    budget,
  } = data

  return (
    <>
      <div className="single-movie">
        <header className="single-header">
          <Link to="/" className="btn">
            Back Home
          </Link>
        </header>
        <div className="movie-img">
          <img src={`${imgURL}${poster_path}`} alt="" className="img" />
        </div>
        <div className="movie-information">
          <div className="movie-info">
            <h3>
              {original_title} <span>({release_date.slice(0, 4)})</span>
            </h3>
            <p className="genre">
              {genres.map((genre, index) => {
                return (
                  <span key={index}>
                    {genre.name} {index < genres.length - 1 ? ', ' : ''}
                  </span>
                )
              })}
            </p>
          </div>
          <div className="single-overview">
            <h4 className="overview-title">OverView</h4>
            <p className="overview-p">{overview}</p>
          </div>
          <div className="movie-score">
            <h5 className="vote-info">
              Vote Average : <span className="vote">{vote_average}</span>
            </h5>{' '}
            <h5 className="vote-info">
              Vote Count : <span className="vote">{vote_count}</span>
            </h5>
            <h5 className="vote-info">
              Budget : <span className="vote">{budget}</span>
            </h5>
            <h5 className="vote-info">
              Box Office : <span className="vote">{revenue}</span>
            </h5>
            {/* <h5>{revenue > budget ? 'success' : 'fair'}</h5> */}
          </div>
          <div className="production-companies">
            <h5 className="vote-info">Production Companies</h5>
            {production_companies.map((company, index) => {
              return (
                <span className="vote">
                  {company.name}
                  {index < production_companies.length - 1 ? ' , ' : ''}
                </span>
              )
            })}
          </div>
          <div className="production-countries">
            <h5 className="vote-info">Production Countries</h5>
            {production_countries.map((country, index) => {
              return (
                <span className="vote">
                  {country.name}
                  {index < production_countries.length - 1 ? ',' : ''}
                </span>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}
export default Movie
