import React, { useState } from 'react';
import './Home.css';
import { 
  BrowserRouter as Router, 
  Route, 
  Link, 
  useHistory } from 'react-router-dom'
  import { OldUser } from './OldUser'

export const Lnav = () => {
    let history = useHistory()
    const push = () => {
      history.push('/lecturer-login')
      window.location.reload()
      }
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
        <Link className="nav-link" to="/lecturers-home">Notifications</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link">Profile</Link>
      </li>
      <li className="nav-item ">
        <Link className="nav-link" >Tests</Link>
      </li>
      <li className="nav-item ">
        <Link className="nav-link" >Assignment</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" >Courses</Link>
      </li>
      
    </ul>
    <div className='nav-item'><span className='nav-link logout' data-toggle='modal' data-target='#logout'>Logout</span></div>

    <div className='modal fade' id='logout' tabIndex='-1' role='dialog' aria-labelledby='logoutconfirm' aria-hidden='true'>
      <div className='modal-dialog modal-dialog-centered' role='document'>
        <div className='modal-content'>
          <div className='modal-header'>
            <button type='button' className='close' data-dismiss='modal' aria-label='close'>
              <span aria-hidden='true'>&times;</span>
            </button>
          </div>
          <div className='modal-body'> Are you sure you want to logout?</div>
          <div className='modal-footer'>
          <button type='button' className='btn ' data-dismiss='modal' onClick={push} >Logout</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</nav>
    )
}