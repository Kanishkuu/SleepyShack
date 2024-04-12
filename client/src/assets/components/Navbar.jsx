import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHotel } from "@fortawesome/free-solid-svg-icons"
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo  text-xl ">
        <FontAwesomeIcon icon={faHotel} />  SleepyShack</span>
        <div className="navItems">
          <button className="navButton  bg-white text-primary rounded-md">Register</button>
          <button className="navButton  bg-white text-primary rounded-md">Login</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
