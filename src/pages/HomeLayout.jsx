import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'

const HomeLayout = () => {
  return (
    <div>
      <NavBar />
      <section className="page">
        <Outlet />
      </section>
    </div>
  )
}
export default HomeLayout
