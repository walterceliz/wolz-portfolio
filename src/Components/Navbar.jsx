import React from "react" 
import { Link } from 'react-router-dom'
import './Navbar.css' 

const Navbar = props => {
  return (
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
        <Link className="navbar-brand" to="/">{/* <span className="wea1">/</span> */}<img src="https://upload.wikimedia.org/wikipedia/fr/4/46/Ecole_W_Logo.png" alt="logo"/></Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link button" to="/home"> Inicio </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link button" to="/skills"> Habilidades </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link button" to="/portfolio"> Portfolio </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link button" to="contact"> Contacto </Link>
              </li>
            </ul>
          </div>
        </div> 
      </nav>
    
  )
}

export default Navbar
