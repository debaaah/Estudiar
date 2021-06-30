import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
//import './App.scss';
import './components/Forms.css'
import { NewUser}  from './components/NewUser';
import { OldUser}  from './components/OldUser';
import { SelectCourses } from './components/SelectCourses';
import { Dash } from './components/Dashboard'
import { Estudiar } from './components/Estudiar'
import { Course } from './components/Course';
import { Testpage } from './components/Testpage';
import { Home }from './components/Homepage';
import { About }from './components/About';
import { Test }from './components/Tests';
import { Study }from './components/Study';
import { Info }from './components/Info';
import { Navbar } from './components/Navbar';


function App(){
  
  let user = JSON.parse(localStorage.getItem('user'))
  return (
    <div>
      <Router>
        <Switch>
        <Route exact path='/'> <Estudiar/></Route>
          <Route exact path='/sign-up' ><NewUser/></Route>
          <Route exact path='/login'><OldUser value={user} /></Route>
          <Route exact path='/sign-up'><NewUser/></Route>
          <Route exact path='/home' ><Dash value={user}/></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;


{ /* <div className='container mt-3'>
<div className='contact-form row'>
  <div className='mw-100 p-3 col-6'>
    <Router>
    <Switch>
    <NewUser/>
      <Route exact path="./User" component={NewUser} />
      <Route exact path='./SelectCourses' component={SelectCourses}/>
    </Switch>
    </Router>
</div>  
</div>
</div>*/ }