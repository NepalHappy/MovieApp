import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import {
  About,
  Error,
  HomeLayout,
  Landing,
  NewsLetter,
  SinglePageError,
  Movie,
} from './pages'

import { loader as movieLoader } from './pages/Landing'
import { loader as singleMovieLoader } from './pages/Movie'
import { action as newsLetterAction } from './pages/NewsLetter'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { staleTime: 1000 * 60 * 5 },
  },
})

const router = createBrowserRouter([
  {
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Landing />, loader: movieLoader(queryClient) },
      { path: 'about', element: <About /> },
      { path: 'newsletter', element: <NewsLetter />, action: newsLetterAction },
      {
        path: 'movie/:id',
        element: <Movie />,
        loader: singleMovieLoader(queryClient),
      },
    ],
  },
])
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  )
}

export default App
