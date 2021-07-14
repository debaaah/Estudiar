import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './components/Forms.css'
import { NewUser}  from './components/NewUser';
import { OldUser}  from './components/OldUser';
import { Dash } from './components/Dashboard'
import { Estudiar } from './components/Estudiar'
import { Sust } from './components/SUST'
import { Sult } from './components/SULT'
import { Ldash } from './components/Ldash'
import { LecOu } from './components/Lolduser'


function App(){
  
  let user = JSON.parse(localStorage.getItem('user'))
  let Luser = JSON.parse(localStorage.getItem('Luser'))
  return (
    <div>
      <Router>
        <Switch>
        <Route exact path='/'> <Estudiar/></Route>
          <Route exact path='/sign-up' ><NewUser/></Route>
          <Route exact path='/login'><OldUser value={user} /></Route>
          <Route exact path='/sign-up'><NewUser/></Route>
          <Route exact path='/home' ><Dash value={user}/></Route>
          <Route exact path='/lecturers-home' ><Ldash value={user}/></Route>
          <Route path='/student-sign-up' component={Sust}></Route>
           <Route path='/lecturer-sign-up' component={Sult}></Route>
           <Route path='/lecturer-login'><LecOu value={Luser} /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

