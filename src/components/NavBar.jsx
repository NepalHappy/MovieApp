import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
      <div className="nav-center">
        <span className="logo">Movie App</span>
        <div className="nav-links">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
          <NavLink to="about" className="nav-link">
            About
          </NavLink>
          <NavLink to="newsletter" className="nav-link">
            NewsLetter
          </NavLink>
        </div>
      </div>
    </nav>
  )
}
export default NavBar
