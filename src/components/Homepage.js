import React from "react";
import { Link } from "react-router-dom"
import './Home.css'
import { Card } from './Card'
import { useHistory } from 'react-router-dom'
import { Course } from './Course';

export const Home = (props) => {
  let user = props.value
  let history = useHistory()
  const push2 = () => {
    history.push('/tests')
  }
return (
  <div className='content-box'>
  <div className='card test-card d-flex justify-content-start' style={{width:'25rem'}}>
    <div className='card-body'>
      <h5 className='card-title'>Test Information</h5>
      <p className='card-text'>Test available <br/> Deadline: 03/07/21 12:00PM</p>
      <a className='btn my-btn' onClick={push2}>See More</a>
      </div></div>
      <h4>Recent Study</h4>
  <div className='course-box d-flex justify-content-around'>
      <Card value={user.courses[0]}/> {console.log(user.courses[0])}
      <Card value={user.courses[2]}/>
      <Card value={user.courses[1]}/>
      <Card value={user.courses[3]}/>
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