import React from "react";
import { Link } from "react-router-dom"
import './Home.css'
import { Card } from './Card'

export const Home = (props) => {
  let user = props.value
return (
  <div className='content-box'>
  <div className='card test-card d-flex justify-content-start' style={{width:'25rem'}}>
    <div className='card-body'>
      <h5 className='card-title'>Test Information</h5>
      <p className='card-text'>with supporting text below as a natural lead in toadditional content.</p>
      <a href='#' className='btn my-btn'>See More</a>
      </div></div>
      <h4>Recent Study</h4>
  <div className='course-box d-flex justify-content-around'>
    {user.courses.map(course => (
      <Card value={course}/>
    ))}
  </div>
  </div>
)
}
 {/*<div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
       
</div>*}
 {/*<div className="App">
      <Basic />
      <NewUser/>
      {/*<Router>
      <NewUser/>
        <Switch>
          <Route path="/OldUser">
            <OldUser />
          </Route>
        </Switch>
          </Router>*/
      
       /*<Router>
         <Homepage />

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
          </Router>*}
        </div>*/}
        {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}