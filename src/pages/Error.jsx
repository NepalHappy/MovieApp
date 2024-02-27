import { Link, useRouteError } from 'react-router-dom'
import img from '../assets/not-found.svg'
const Error = () => {
  const error = useRouteError()
  console.log(error)

  if (error.status === 404) {
    return (
      <div className="error-container">
        <img src={img} alt="" className="img" />

        <h4 style={{ marginTop: '3rem' }}>{error.data}</h4>
        <h5 style={{ marginTop: '3rem' }}>Something went Wrong</h5>
        <Link to="/" className="btn" style={{ marginTop: '3rem' }}>
          Back Home
        </Link>
      </div>
    )
  }

  return <h4>Something went Wrong</h4>
}
export default Error
