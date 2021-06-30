import React, { useState } from 'react';
import './Home.css';
import { Link } from 'react-router-dom'

export const Navbar = () => {
    const [menuCollapse, setMenuCollapse] = useState(false)
    const menuIconClick = () => {
        menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true)
    } 
    return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand estudiar-nav" href="#">Estudiar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <Link className="nav-link" to="/home">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">About</Link>
      </li>
      <li className="nav-item ">
        <Link className="nav-link" to="/tests">Tests</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/study">Study</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/information">Information</Link>
      </li>
    </ul>
    <div className='nav-item'><a className='nav-link logout' href=''>Log out</a></div>
  </div>
</nav>
    )
}