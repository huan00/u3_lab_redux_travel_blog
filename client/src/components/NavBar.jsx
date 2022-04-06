import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className="navBar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/addreview">Add Review</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  )
}

export default NavBar
