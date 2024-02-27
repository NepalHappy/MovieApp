import axios from 'axios'
import { useLoaderData } from 'react-router-dom'
import MovieList from '../components/MovieList'
import Search from '../components/Search'
import { useQuery } from '@tanstack/react-query'

const movieUrl = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=${
  import.meta.env.VITE_API_KEY
}`

const searchURL = `https://api.themoviedb.org/3/search/movie?api_key=${
  import.meta.env.VITE_API_KEY
}&include_adult=false&include_video=false&language=en-US&page=1&query="`

const searchMoviesQuery = (searchTerm) => {
  return {
    queryKey: ['search', searchTerm],
    queryFn: async () => {
      if (searchTerm === '') {
        const response = await axios.get(`${movieUrl}`)

        return response.data
      } else {
        const response = await axios.get(`${searchURL} ${searchTerm}`)

        return response.data
      }
    },
  }
  return { isLoading, data }
}

export const loader =
  (queryClient) =>
  async ({ request }) => {
    const url = new URL(request.url)
    const searchTerm = url.searchParams.get('searchForm') || ''
    await queryClient.ensureQueryData(searchMoviesQuery(searchTerm))
    return { searchTerm: searchTerm }
  }

const Landing = () => {
  const { searchTerm } = useLoaderData()

  const { isLoading, data } = useQuery(searchMoviesQuery(searchTerm))

  if (isLoading) {
    return <div className="loading"></div>
  }

  return (
    <>
      <Search searchTerm={searchTerm} />
      <MovieList movies={data.results} />
    </>
  )
}
export default Landing
